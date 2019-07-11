import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealComponent } from './meal/meal.component';
import { MealDetailComponent } from './meal-detail/meal-detail.component';
import { MealFormComponent } from './meal-form/meal-form.component';
import { HttpClientModule} from '@angular/common/http';
import { MealService } from './meals/meal.service';

@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    MealDetailComponent,
    MealFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MealService],
  bootstrap: [AppComponent]
})
export class AppModule { }
