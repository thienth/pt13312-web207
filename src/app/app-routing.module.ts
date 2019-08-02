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
