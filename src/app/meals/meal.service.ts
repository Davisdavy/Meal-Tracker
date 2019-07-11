import { Injectable } from '@angular/core';
import { Meals } from '../meals';

@Injectable()
export class MealService {
  getMeals() {
    return Meals;
  }
  constructor() { }
}
