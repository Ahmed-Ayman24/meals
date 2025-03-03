import { Routes } from '@angular/router';
import { MealsSidebarComponent } from './components/meals-sidebar/meals-sidebar.component';
import { MealsComponent } from './components/meals/meals.component';
import { MealDetailsComponent } from './components/meal-details/meal-details.component';

export const routes: Routes = [
    {path: '', component: MealsSidebarComponent, children: [
        {path: '', redirectTo: 'category/all', pathMatch: 'full'},
        {path: 'category/:categoryName', component: MealsComponent},
        {path: 'mealdetails/:mealId', component: MealDetailsComponent},
    ]},
];
