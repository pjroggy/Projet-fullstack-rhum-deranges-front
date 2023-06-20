import { Recipe } from "./recipe.model";

export class Ingredient {

    constructor(

        public name: string,
        public quantity: number,
        // public recipeList: Recipe,
        public id?: number
    ){}
}