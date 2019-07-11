import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from '../meal';
@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent implements OnInit {

  @Input() meal: Meal;
  @Output() isComplete = new EventEmitter<boolean>();

  mealDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  ngOnInit() {
  }

}
