import { Article } from "./article.model";
import { EventEmitter, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

export class ArticleService {
    private articleList:Article[]=[];
    articleListChanged:EventEmitter<Article> = new EventEmitter<Article>();
    constructor(){
        let publishedState = "Published";
        for(let i=1;i<=20;i++){
            if(i>10){
                publishedState = "New";
            }
            let article:Article=new Article("title-"+i,"Title "+i,"This is a summary ["+i+"] of my article",publishedState);
            article.lastModificationDate = new Date(1505000000000+5*24*60*60*1000*i);
            article.articleText = `This is a detailed text for [`+i+`] of my article.\n It is great to see my code working
            Now, I can even write multi line string . So I can write lots of text for <b>`+i+`</b>
            `;
            this.articleList.push(article);
        }
        
    }
     
    getLatestArticles(numberOfArticles:number){
        return this.articleList.slice(this.articleList.length-numberOfArticles);
    }
    getAllArticles(){
        return this.articleList.slice();
    }

    getArticleById(articleId:string){
        return this.articleList.find((article:Article,id)=>{
            return article.id===articleId;
        })
    }

    getArticleWithDetails(id:string){
        let article:Article = this.getArticleById(id);
        if(article.articleText==null){
            article.articleText= "This is the article text for article id :"+id;
        }
            return article;
    }

    addArticle(article:Article):boolean{
        this.articleList.push(article);
        this.articleListChanged.emit(article);
        return true;
    }
    getPublishedArticles(){
        return this.articleList.slice();
    }
}