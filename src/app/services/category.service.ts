import { Injectable } from '@angular/core';
import { HttpClient, 
			HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = "http://5d2c2c478c90070014972095.mockapi.io/categories";
  constructor(private http: HttpClient) { }

  public getListCategory(){
  	return this.http.get<any[]>(this.apiUrl);
  }
}
