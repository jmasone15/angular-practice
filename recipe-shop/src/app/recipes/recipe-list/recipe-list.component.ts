import { Component } from '@angular/core';
import { RecipeModel } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: [ './recipe-list.component.css' ]
})
export class RecipeListComponent {
  recipes: RecipeModel[] = [
    new RecipeModel("A Test Recipe", "This is simply a test", "https://www.thespruceeats.com/thmb/JtOA_LnrhrW_TfS3MYCqlPqhUFA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/basic-congee-recipes-4065244-hero-01-5cf81547c34d4520be10bb57c6cda902.jpg"),
    new RecipeModel("A Test Recipe", "This is simply a test", "https://www.thespruceeats.com/thmb/JtOA_LnrhrW_TfS3MYCqlPqhUFA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/basic-congee-recipes-4065244-hero-01-5cf81547c34d4520be10bb57c6cda902.jpg")
  ];
}
