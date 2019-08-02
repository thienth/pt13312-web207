import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cate-add',
  templateUrl: './cate-add.component.html',
  styleUrls: ['./cate-add.component.css']
})
export class CateAddComponent implements OnInit {

  constructor(private cateService: CategoryService,
  				private router: Router) { }
  category = {
  	name: new FormControl(''),
  	image: new FormControl('')
  }
  ngOnInit() {
  }
  saveCategory(){
    let sendData = {
      name: this.category.name.value,
      image: this.category.image.value
    }

  	this.cateService.addCategory(sendData)
  					.subscribe(data => {
  						console.log(data);
  						this.category = {
  							name: new FormControl(''),
                image: new FormControl('')
  						}
  						this.router.navigate(['/']);
  					});
  }
}
