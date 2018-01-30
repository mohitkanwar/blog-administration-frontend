import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticleDetailsComponent } from './admin-article-details.component';

describe('AdminArticleDetailsComponent', () => {
  let component: AdminArticleDetailsComponent;
  let fixture: ComponentFixture<AdminArticleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminArticleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArticleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
