import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {
  recepies:Recipe[]=[
    new Recipe('r1','d1','l1'),
    new Recipe('r2','d2','l2'),
    new Recipe('r3','d3','l3')
  ];
  constructor() { }

  ngOnInit() {
  }

}
