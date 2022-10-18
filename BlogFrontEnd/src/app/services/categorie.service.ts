import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categories} from "../model/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private httpClient : HttpClient) { }

  public getCategories() : Observable<Array<Categories>> {
    return this.httpClient.get<Array<Categories>>("http://localhost:3000/categories");
  }
}
