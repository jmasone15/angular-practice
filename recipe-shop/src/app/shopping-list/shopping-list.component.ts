import { Component } from '@angular/core';
import { IngredientModel } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: [ './shopping-list.component.css' ]
})
export class ShoppingListComponent {
  ingredients: IngredientModel[] = [
    new IngredientModel("Apples", 5),
    new IngredientModel("Tomato", 2)
  ];

  onIngredientAdded(ingredient: IngredientModel) {
    this.ingredients.push(ingredient)
  }
}
