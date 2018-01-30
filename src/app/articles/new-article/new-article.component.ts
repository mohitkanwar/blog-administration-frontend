import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Article } from '../../article/article.model';
import { ArticleService } from '../../article/article.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  constructor( private articleService:ArticleService) { }

  newArticleTitle:string;
  newArticleId:string;
  successMessage:string="";

  ngOnInit() {
    this.articleService.articleListChanged.subscribe((article:Article)=>{
      if(this.newArticleId===article.id){
        this.successMessage = "Article with title ["+ article.title+"] Saved Successfully!";
      }
    });
  }
  onAddArticle(f:NgForm){
    console.log("article added"+f.value);
    let article:Article = new Article(f.value.id,f.value.title,f.value.summary,"New");
    article.lastModificationDate = new Date();
    article.articleText = f.value.articleText;
    this.articleService.addArticle(article);
    console.log(article);
  }
  onTitleChange(){
    console.log(this.newArticleTitle);
    this.newArticleId=this.newArticleTitle.replace(/[.*+?^${}()|[\]\\\s]/g,"-").toLowerCase();
  }

}