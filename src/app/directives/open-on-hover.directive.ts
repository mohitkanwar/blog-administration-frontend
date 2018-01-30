import { Directive, HostListener, ElementRef,Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[appOpenOnHover]'
})
export class OpenOnHoverDirective {
  @HostBinding('class.open') isOpen=false;

  constructor(private elementRef:ElementRef, private renderer:Renderer) { }
  @HostListener('mouseenter') mouseover(eventData:Event){
    // this.renderer.setStyle(this.element.nativeElement,'background-color',this.highlightColor);
    console.log('mouse entered')
    this.isOpen=true;
   }
   @HostListener('mouseleave') mouseleave(eventData:Event){
    this.isOpen=false;
  }
   @HostListener('click') onclick(){
    this.isOpen=!this.isOpen;
  }
}
