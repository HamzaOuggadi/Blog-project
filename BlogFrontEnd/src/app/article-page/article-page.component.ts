import { Component, OnInit } from '@angular/core';
import {catchError, Observable, Subscription, throwError} from "rxjs";
import {Article} from "../model/article.model";
import {ArticleService} from "../services/article.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  article! : Article;
  articleId!: String;
  errorMessage! : String;

  constructor(private articleService : ArticleService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {

      this.articleId = params["articleId"];
      console.log(this.articleId);

    });

    //this.articleId = this.activatedRoute.snapshot.params["articleId"];
    //this.articleId = this.activatedRoute.snapshot.queryParams["articleId"];


    this.articleService.getArticleById(this.articleId).subscribe((value) => {
      this.article = value;
    })
  }
}
