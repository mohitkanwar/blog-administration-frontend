import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutinngModule } from './app-routing.module';
import { ArticleService } from './article/article.service';
import { OpenOnHoverDirective } from './directives/open-on-hover.directive';
import { NewArticleComponent } from './articles/new-article/new-article.component';
import { AdminAllArticlesComponent } from './articles/admin-all-articles/admin-all-articles.component';
import { AdminArticleDetailsComponent } from './articles/admin-article-details/admin-article-details.component';
import { AdminArticlePublishComponent } from './articles/admin-article-publish/admin-article-publish.component';
import { LoginComponent } from './login/login.component';
import {LoginService} from './login/login.service';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { UserService } from './user/user.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    OpenOnHoverDirective,
    NewArticleComponent,
    AdminAllArticlesComponent,
    AdminArticleDetailsComponent,
    AdminArticlePublishComponent,
    LoginComponent,
    BlogListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutinngModule,
    FormsModule
  ],
  providers: [LoginService,UserService,ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
