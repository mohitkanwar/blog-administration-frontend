import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminAllArticlesComponent } from "./articles/admin-all-articles/admin-all-articles.component";
import { AdminArticleDetailsComponent } from "./articles/admin-article-details/admin-article-details.component";
import { LoginComponent } from "./login/login.component";
import { BlogListComponent } from "./blog/blog-list/blog-list.component";

const appRoutes:Routes=[
{path : '', redirectTo : '/login' , pathMatch:'full'},
{path : 'login', component : LoginComponent },
{path : 'blogs', component : BlogListComponent },
{path : 'admin/all-articles', component : AdminAllArticlesComponent },
{path : 'admin/article/:id', component : AdminArticleDetailsComponent },
];
@NgModule({
imports:[RouterModule.forRoot(appRoutes)],
exports:[RouterModule]
})
export class AppRoutinngModule{

}