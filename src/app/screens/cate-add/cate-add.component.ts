import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cate-add',
  templateUrl: './cate-add.component.html',
  styleUrls: ['./cate-add.component.css']
})
export class CateAddComponent implements OnInit {

  constructor(private cateService: CategoryService,
  				private router: Router) { }
  category = {
  	name: "",
  	image: ""
  }
  ngOnInit() {
  }
  saveCategory(){
  	this.cateService.addCategory(this.category)
  					.subscribe(data => {
  						console.log(data);
  						this.category = {
  							name: "",
  							image: ""
  						}
  						this.router.navigate(['/']);
  					});
  }
}
