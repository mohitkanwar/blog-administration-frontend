import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../article/article.model';
import { ArticleService } from '../../article/article.service';

@Component({
  selector: 'app-admin-article-publish',
  templateUrl: './admin-article-publish.component.html',
  styleUrls: ['./admin-article-publish.component.css']
})
export class AdminArticlePublishComponent implements OnInit {

  @Input() article:Article;

  constructor(private service:ArticleService) { }

  ngOnInit() {
  }

  onPublish(){
    this.service.getArticleById(this.article.id).publishState="Published";
  }

  onUnPublish(){
    this.service.getArticleById(this.article.id).publishState="Unpublished";
  }

}
