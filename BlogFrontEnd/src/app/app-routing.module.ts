import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticlesComponent} from "./articles/articles.component";
import {HomeComponent} from "./home/home.component";
import {ArticlePageComponent} from "./article-page/article-page.component";

const routes: Routes = [
  {path : "articles", component : ArticlesComponent},
  {path : "home", component : HomeComponent},
  {path : "articlepage", component : ArticlePageComponent, data : {articleId : '1'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
