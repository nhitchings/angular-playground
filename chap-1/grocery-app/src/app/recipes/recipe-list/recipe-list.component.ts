import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Hot Dog',
      'A hot dog (also spelled hotdog), also known as a frankfurter (sometimes shortened to frank), dog, or wiener, is a cooked sausage, traditionally grilled or steamed and served in a partially sliced bun.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hot_dog_with_mustard.png/1200px-Hot_dog_with_mustard.png'),
    new Recipe(
      'BBQ',
      'Barbecue or barbeque (informally BBQ or barbie) is a cooking method, a style of food, and a name for a meal or gathering at which this style of food is cooked and served.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Barbecued_meats.jpg/1280px-Barbecued_meats.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
