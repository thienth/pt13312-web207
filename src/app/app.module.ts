import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CateItemComponent } from './components/cate-item/cate-item.component';
import { HomeComponent } from './screens/home/home.component';
import { DetailCateComponent } from './screens/detail-cate/detail-cate.component';
import { CateAddComponent } from './screens/cate-add/cate-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CateItemComponent,
    HomeComponent,
    DetailCateComponent,
    CateAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
