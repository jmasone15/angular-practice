import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeModel } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: [ './recipe-list.component.css' ]
})
export class RecipeListComponent {
  @Input() public recipes: RecipeModel[];
  @Output() public recipeWasSelected = new EventEmitter<number>()

  onRecipeSelected(index: number) {
    this.recipeWasSelected.emit(index)
  }
}
