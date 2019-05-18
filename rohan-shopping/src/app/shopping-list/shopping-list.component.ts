import { Ingredients } from './../shared/ingredients.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredients[]=[
    new Ingredients("Coconut",50),
    new Ingredients("Coconut",50),
    new Ingredients("Coconut",50)
  ]
  constructor() { }

  ngOnInit() {
  }

}
