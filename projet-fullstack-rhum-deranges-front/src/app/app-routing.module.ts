import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full"},
  { path: "recipes", component: RecipeListComponent}, 
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
