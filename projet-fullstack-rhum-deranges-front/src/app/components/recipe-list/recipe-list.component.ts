import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { DbRecipeService } from 'src/app/shared/db-recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit{

  recipeList: Recipe[] = [];

  constructor(private dbRecipeS: DbRecipeService) {}

  ngOnInit(): void {
      this.dbRecipeS.getAll().subscribe((recipeListFromDataBase: Recipe[]) => {
        this.recipeList = recipeListFromDataBase;
      })
  }
}
