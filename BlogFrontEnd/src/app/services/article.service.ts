import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Article} from "../model/article.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient : HttpClient) { }

  public getArticles() : Observable<Array<Article>> {
    return this.httpClient.get<Array<Article>>("http://localhost:3000/articles");
  }

  public getArticleById(id : String) : Observable<Article> {
    return this.httpClient.get<Article>("http://localhost:3000/articles/"+id);
  }
}
