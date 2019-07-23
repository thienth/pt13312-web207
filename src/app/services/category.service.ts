import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl="http://5d3193844901b4001401a063.mockapi.io/categories";
  constructor( private http:HttpClient) { }
  public getListCategory(){
    return this.http.get<any[]>(this.apiUrl);
  }
}
