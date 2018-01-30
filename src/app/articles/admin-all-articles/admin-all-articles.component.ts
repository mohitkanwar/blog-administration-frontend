import { Component, OnInit } from '@angular/core';
import { Article } from '../../article/article.model';
import { ArticleService } from '../../article/article.service';
@Component({
  selector: 'app-admin-all-articles',
  templateUrl: './admin-all-articles.component.html',
  styleUrls: ['./admin-all-articles.component.css']
})
export class AdminAllArticlesComponent implements OnInit {
  articleList:Article[];
  constructor(private articleService:ArticleService) { }

  ngOnInit() {
    this.articleList=this.articleService.getAllArticles();
    this.articleService.articleListChanged.subscribe((articles)=>{
      this.articleList=this.articleService.getAllArticles();
    })
  }

}
