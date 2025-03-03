import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor(private _HttpClient: HttpClient) { }
  getAllCategories(): Observable<any> {
  return  this._HttpClient.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
  }
 
  getMealsByCategory(category: string): Observable<any> {
    if (category == 'all') {
      return this._HttpClient.get('https://www.themealdb.com/api/json/v1/1/search.php?s')
    }
    else {
      return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    }
  }
  getMealDetails(mealId:string): Observable<any> {
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
  }
}