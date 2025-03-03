import { Component } from '@angular/core';
import { MealsService } from '../../services/meals.service';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-meals',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss'
})
export class MealsComponent {             
categories:any;
meals:any;
constructor(private _MealsService:MealsService, private _ActivatedRoute:ActivatedRoute) { }
ngOnInit() : void {
  if (typeof document != 'undefined') {
    this._MealsService.getAllCategories().subscribe((res) => {
      this.categories = res.meals;
    });
    this._ActivatedRoute.paramMap.subscribe((params) => {
      const categoryName = params.get('categoryName'); 
      if (categoryName) {
        this._MealsService.getMealsByCategory(categoryName).subscribe((res) => {
          this.meals = res.meals;
        });
      } 
    });
 }
}
}
