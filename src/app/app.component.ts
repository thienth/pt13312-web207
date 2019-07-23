import { Component } from '@angular/core';
import { CategoryService } from "./services/category.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categories:any[];
  constructor( private cateService: CategoryService){

  }
  deletedCate={
    id  : -1,
    name:"deleted",
    image:"delete Imgae"
  }
  ngOnInit(){
		this.cateService.getListCategory()
						.subscribe((data) => {
							console.log(data);
							this.categories = data;
						});
		console.log('loading...');
  }
  removeSelectedCate(cate){
    this.deletedCate={...cate};
  }
}
