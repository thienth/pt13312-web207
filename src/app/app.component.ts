import { Component, OnInit } from '@angular/core';
import {CategoryService} from './services/category.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	categories: any[];
	constructor(private cateService: CategoryService){

	}
	ngOnInit(){
		this.cateService.getListCategory()
						.subscribe((data) => {
							console.log(data);
							this.categories = data;
						});
		console.log('loading...');
	}
}
