import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class HighCaloriesService {
  highcaloriesUrl = 'assets/calories.json';

  constructor(private http: HttpClient) {}
  get highCalories() {
    return this.http.get(this.highcaloriesUrl);
  }
}
