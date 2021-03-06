import { Component, OnInit } from '@angular/core';

import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://www.logolynx.com/images/logolynx/s_82/829ba7822e43ebe89394d1ecbbf152b7.jpeg'),
    new Recipe('A Test Recipe', 'This is a test', 'https://www.logolynx.com/images/logolynx/s_82/829ba7822e43ebe89394d1ecbbf152b7.jpeg'),
    new Recipe('A Test Recipe', 'This is a test', 'https://www.logolynx.com/images/logolynx/s_82/829ba7822e43ebe89394d1ecbbf152b7.jpeg')]
  ;

  constructor() { }

  ngOnInit() {
  }

}
