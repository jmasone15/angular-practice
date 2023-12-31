import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeModel } from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: [ './recipe-item.component.css' ]
})
export class RecipeItemComponent {
  @Input() public recipe: RecipeModel;
  @Output() public recipeSelected = new EventEmitter<void>();

  onSelected() {
    this.recipeSelected.emit();
  }
}
