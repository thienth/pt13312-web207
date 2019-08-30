import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cate-add',
  templateUrl: './cate-add.component.html',
  styleUrls: ['./cate-add.component.css']
})
export class CateAddComponent implements OnInit {

  constructor(private cateService: CategoryService,
  				private router: Router) { }
  category = new FormGroup({
  	name: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),
  	image: new FormControl('',[
      Validators.required
    ])
  });
  get name() { return this.category.get('name'); }
	get image() { return this.category.get('image'); }
  ngOnInit() {
  }
  saveCategory(){
    // let sendData = {
    //   name: this.category.name.value,
    //   image: this.category.image.value
    // }

  	if(this.category.valid){
      this.cateService.addCategory(this.category.value)
  					.subscribe(data => {
  						console.log(data);
  						// this.category = {
  						// 	name: new FormControl(''),
              //   image: new FormControl('')
  						// }
  						this.router.navigate(['/']);
  					})
    }  
  }
}
