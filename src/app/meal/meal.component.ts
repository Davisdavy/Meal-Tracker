import { Component, OnInit } from '@angular/core';
import {Meal} from '../meal';
import { from } from 'rxjs';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  meals: Meal[] = [
    new Meal(1, 'Rabbit pie', 200, 'Meduim oil content' ),
  ];
  toggleDetails(index) {
    this.meals[index].showDescription = !this.meals[index].showDescription;
  }

  deleteMeal(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.meals[index].meal}?`);

      if (toDelete) {
        this.meals.splice(index, 1);
      }
    }
  }

  addNewMeal(meal) {
    const mealLength = this.meals.length;
    meal.id = mealLength + 1;
    this.meals.push(meal);
  }
  constructor() { }

  ngOnInit() {
  }

}
