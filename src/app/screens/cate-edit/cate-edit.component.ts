import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cate-edit',
  templateUrl: './cate-edit.component.html',
  styleUrls: ['./cate-edit.component.css']
})
export class CateEditComponent implements OnInit {

  constructor(
  		private route: ActivatedRoute,
  		private router: Router,
  		private cateService: CategoryService
  	) { }
  cateForm = new FormGroup({
  	name: new FormControl('',[
		  Validators.required,
		  Validators.minLength(4),
		  Validators.maxLength(20)
	  ]),
	image: new FormControl('',[
		Validators.required
	])
  });
	get name() { return this.cateForm.get('name'); }
	get image() { return this.cateForm.get('image'); }
  cateId: string;
  ngOnInit() {
  	this.cateId = this.route.snapshot.params.id;
  	this.cateService.getCategoryById(this.cateId)
  					.subscribe(data => {
  						this.cateForm.setValue({
  							name: data.name,
  							image: data.image
  						});
  					});
  }
  saveCategory(){
  	this.cateService.editCategory(this.cateId, this.cateForm.value)
  					.subscribe(data => {
  						console.log(data);
  						this.router.navigate(['/']);
  					})
  }

}
