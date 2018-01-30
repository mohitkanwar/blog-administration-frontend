import { Component, OnInit ,Renderer2} from '@angular/core';
import { ActivatedRoute ,Params} from '@angular/router';
import { Article } from '../../article/article.model';
import { ArticleService } from '../../article/article.service';

@Component({
  selector: 'app-admin-article-details',
  templateUrl: './admin-article-details.component.html',
  styleUrls: ['./admin-article-details.component.css']
})
export class AdminArticleDetailsComponent implements OnInit {
  article:Article;
  params:Params;
  isEditMode:boolean=false;
  focusElement:string;
  constructor(private route:ActivatedRoute,private articleService:ArticleService,private renderer:Renderer2) { }

  ngOnInit() {
    this.params=this.route.params.subscribe((params:Params)=>{
      let id = params['id'];
      this.article=this.articleService.getArticleWithDetails(id);
    });
  }
  onTitleDoubleClick(){
    this.isEditMode=true;
  }
  onSave(){
    this.isEditMode=false;
    this.article.lastModificationDate = new Date();
    this.article.publishState = "Modified";
  }
  onFocusOut(){
    this.isEditMode=false;
  }
  onEdit(focusElement){
    this.isEditMode=true;
    //TODO 
    // Add focus on the element
    console.log(focusElement);
  }
}
