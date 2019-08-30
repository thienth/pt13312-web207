import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } 
    from '@angular/router';
import { ProductsService } from '../../services/products.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  cateId: string;
  product = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(40)
    ]),
    image: new FormControl('',[
      Validators.required
    ]),
    price: new FormControl('',[
      Validators.required,
      Validators.min(0)
    ]),
    detail: new FormControl('',[
      Validators.required
    ]),
    amount: new FormControl('',[
      Validators.required,
      Validators.min(0)
    ]), 
    status:new FormControl(''),

    cate_id:new FormControl('')
  });

  get name() { return this.product.get('name'); }
  get image() { return this.product.get('image'); }
  get price() { return this.product.get('price'); }
  get detail() { return this.product.get('detail'); }
  get amount() { return this.product.get('amount'); }
  //get status() { return this.product.get('status'); }
  ngOnInit() {
    this.cateId = this.route.snapshot.params.cateId;
    this.product.setValue({
      name:'',
      image:'',
      price:'',
      detail:'',
      amount:'',
      status:'',
      cate_id: this.cateId,
    }) 
  }
      saveProduct() {
        console.log(this.product.value);
         if(this.product.valid){
                this.productService.addProduct( this.product.value)
                .subscribe(data => {
                this.router.navigate([`/category/${this.cateId}`]);
                });
          }
      }
}
