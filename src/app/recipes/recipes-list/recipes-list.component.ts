import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('test recipe', 'this is simply a test',
      'https://www.zajadam.pl/wp-content/uploads/2010/10/rosol-przepis-tradycyjny-6504337-891x500.jpg'),
    new Recipe('Rosol', 'Polska zupa',
      'https://www.zajadam.pl/wp-content/uploads/2010/10/rosol-przepis-tradycyjny-6504337-891x500.jpg')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
