import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} 
		from './screens/home/home.component';
import {DetailCateComponent} 
		from './screens/detail-cate/detail-cate.component';
import {CateAddComponent} 
		from './screens/cate-add/cate-add.component';
import {CateEditComponent} 
		from './screens/cate-edit/cate-edit.component';
import { ProductAddComponent } 
		from './screens/product-add/product-add.component';


const routes: Routes = [
	{
		path: "",
		component: HomeComponent
	},
	{
		path: "category/add",
		component: CateAddComponent
	},
  	{
    	path: 'category/:id',
    	component: DetailCateComponent
	  }
	  ,
	{
		path: "",
		component: ProductAddComponent
	},
	{
		path: "category/edit/:id",
		component: CateEditComponent
	},
	{
		path: "detail/:id",
		component: DetailCateComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
