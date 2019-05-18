import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {
  public recepies:Recipe[]=[
    new Recipe('Modak1','Modak Description','https://i.ndtvimg.com/i/2017-08/modak_650x400_41502887441.jpg'),
    new Recipe('Thalipeeth','d2','l2'),
    new Recipe('Pruran Poli','d3','l3')
  ];
  constructor() { }

  ngOnInit() {
  }

}
