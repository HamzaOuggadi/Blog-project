import { Component, OnInit } from '@angular/core';
import {Article} from "../model/article.model";
import {catchError, Observable, throwError} from "rxjs";
import {ArticleService} from "../services/article.service";
import {Categories} from "../model/category.model";
import {CategorieService} from "../services/categorie.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  article! : Observable<Array<Article>>;
  categories! : Observable<Array<Categories>>;
  errorMessage! : String;

  constructor(private articleService : ArticleService, private categorieService : CategorieService) { }

  ngOnInit(): void {
    this.article = this.articleService.getArticles().pipe(catchError(err => {
      this.errorMessage = err.message;
      return throwError(err);
    }));
    this.categories = this.categorieService.getCategories().pipe(catchError(err => {
      this.errorMessage = err.message;
      return throwError(err);
    }));
  }

}
