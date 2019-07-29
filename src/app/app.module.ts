import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CateItemComponent } from './components/cate-item/cate-item.component';
import { HomeComponent } from './screens/home/home.component';
import { DetailCateComponent } from './screens/detail-cate/detail-cate.component';
import { AddCateComponent } from './screens/add-cate/add-cate.component';
import { EditCateComponent } from './screens/edit-cate/edit-cate.component';
import { AddProductComponent } from './screens/detail-cate/add-product.component';
import { EditProductComponent } from './screens/detail-cate/edit-product.component';
import { CateAddComponent } from './screens/cate-add/cate-add.component';
import { CateEditComponent } from './screens/cate-edit/cate-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    CateItemComponent,
    HomeComponent,
    DetailCateComponent,
    AddCateComponent,
    EditCateComponent,
    AddProductComponent,
    EditProductComponent,
    CateAddComponent,
    CateEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
