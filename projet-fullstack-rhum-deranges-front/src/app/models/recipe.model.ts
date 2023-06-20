import { Ingredient } from "./ingredient.model";
import { Rhum } from "./rhum.model";

export class Recipe {

    constructor(

        public name: string,
        public ingredientList: Ingredient[],
        public rhum: Rhum,
        public dateOfCreation: string,
        public price: number,
        public id?: number
    ){}
}