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

	deletedCate = {
		id: -1,
		name: "deleted",
		image: "deleted Image"
	};
	ngOnInit(){
		this.cateService.getListCategory()
						.subscribe((data) => {
							this.categories = data;
						});
	}
	removeSelectedCate(cate){
		this.deletedCate = {...cate};
	}
}
