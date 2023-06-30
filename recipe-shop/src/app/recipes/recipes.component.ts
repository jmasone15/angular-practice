import { Component } from '@angular/core';
import { RecipeModel } from "./recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  public recipes: RecipeModel[] = [
    new RecipeModel(
      "A Test Recipe",
      "This is simply a test",
      "https://www.thespruceeats.com/thmb/JtOA_LnrhrW_TfS3MYCqlPqhUFA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/basic-congee-recipes-4065244-hero-01-5cf81547c34d4520be10bb57c6cda902.jpg"
    ),
    new RecipeModel(
      "Another Test Recipe",
      "This is simply another test",
      "https://www.thespruceeats.com/thmb/JtOA_LnrhrW_TfS3MYCqlPqhUFA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/basic-congee-recipes-4065244-hero-01-5cf81547c34d4520be10bb57c6cda902.jpg"
    )
  ];
  public selectedRecipeIndex: number;
}
