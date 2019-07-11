import { Injectable } from '@angular/core';
import { Meals } from '../meals';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  getMeals() {
    return Meals;
  }
  constructor() { }
}
