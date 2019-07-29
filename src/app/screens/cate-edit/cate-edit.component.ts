import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cate-edit',
  templateUrl: './cate-edit.component.html',
  styleUrls: ['./cate-edit.component.css']
})
export class CateEditComponent implements OnInit {

  constructor(
    private cateService: CategoryService,
    private router:Router,
    private route:ActivatedRoute,
    ) { }
  category={
    name : "",
    image : ""
  }
  id="0";
  ngOnInit() {this.id= this.route.snapshot.params.id;
    this.cateService.getListCategory().subscribe( data =>{
      console.log(data);
      this.category=data.find((item)=>item.id===this.id);
      // console.log(this.category);
    });
    
  }
  updateCategory(){
    this.cateService.updateCategory(this.category).subscribe( data=>{
      console.log(data);
      this.category={
        name:"",
        image:""
      };
      this.router.navigate(['/']);
    })
  }
}
