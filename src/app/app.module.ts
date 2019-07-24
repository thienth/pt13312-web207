import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CateItemComponent } from './components/cate-item/cate-item.component';
import { HomeComponent } from './screens/home/home.component';
import { DetailCateComponent } from './screens/detail-cate/detail-cate.component';

@NgModule({
  declarations: [
    AppComponent,
    CateItemComponent,
    HomeComponent,
    DetailCateComponent
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
