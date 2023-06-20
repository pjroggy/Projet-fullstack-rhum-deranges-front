import { Recipe } from "./recipe.model";

export class Rhum {

    constructor(

        public name: string,
        public origin: string,
        public alcoholDegree: number,
        // public reciepeList: Recipe[],
        public id?: number
    ){}
}