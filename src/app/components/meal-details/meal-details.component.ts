import { Component } from '@angular/core';
import { MealsService } from '../../services/meals.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meal-details',
  imports: [],
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.scss',
})
export class MealDetailsComponent {
  mealDetails: any;
  constructor(
    private _MealsService: MealsService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (typeof document != 'undefined') {
      this._ActivatedRoute.paramMap.subscribe((params) => {
        const mealId = params.get('mealId');
        if (mealId) {
          this._MealsService.getMealDetails(mealId).subscribe((res) => {
            this.mealDetails = res.meals[0];
          });
        }
      });
    }
  }
  getIngredients(mealDetails: any): any {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = `strIngredient${i}`;
      const measure = `strMeasure${i}`;
      if (this.mealDetails[ingredient]) {
        ingredients.push({
          ingredient: this.mealDetails[ingredient],
          measure: this.mealDetails[measure],
        });
      } else {
        return ingredients;
      }
    }
  }
}
