import { Component, OnInit } from '@angular/core';
import {Meal} from '../meal';
import { Meals } from '../meals';
import { HttpClient } from '@angular/common/http';
import {Quote} from '../quote-class/quote';
import { MealService } from '../meals/meal.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  providers: [MealService],
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  meals: Meal[];
  quote: Quote;
  constructor(mealService: MealService, private http: HttpClient) {
    this.meals = mealService.getMeals();
  }

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

  ngOnInit() {
    interface ApiResponse {
      quote: string;
      author: string;
  }
    this.http.get<ApiResponse>('http://quotes.stormconsultancy.co.uk/random.json(Links to an external site.)').subscribe(data => {
this.quote = new Quote(data.quote, data.author);
    });
  }
}
