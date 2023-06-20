import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DbRecipeService {

 private readonly _BASE_URL: string = "http://localhost:8080/recipes";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this._BASE_URL}/all`)
  }
}
