import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//assgment
import { HomeComponent } from './screens/home/home.component';
import { AddCateComponent } from './screens/add-cate/add-cate.component';
import { DetailCateComponent } from './screens/detail-cate/detail-cate.component';
import { EditCateComponent } from './screens/edit-cate/edit-cate.component';
import { CateAddComponent } from './screens/cate-add/cate-add.component';
import { CateEditComponent } from './screens/cate-edit/cate-edit.component';

import { from } from 'rxjs';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"detail/:id",
    component:DetailCateComponent
  },
  {
    path:"category/add",
    component:CateAddComponent
  },
  {
    path:"add-cate",
    component:AddCateComponent
  },
  {
    path:"edit-cate/:id",
    component:EditCateComponent
  },
  {
    path:"cate-edit/:id",
    component:CateEditComponent
  },
  {
    path:"detail-cate/:id",
    component:DetailCateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
