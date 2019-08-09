import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../../services/products.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService
  ) { }
  productForm = new FormGroup({
    name: new FormControl(''),
    image: new FormControl(''),
    price: new FormControl(''),
    detail: new FormControl(''),
    amount: new FormControl(''),
    status: new FormControl(''),
    cate_id: new FormControl(''),
  });
  cateId: string;
  productId: string;
  ngOnInit() {
    this.productId = this.route.snapshot.params.productId;
    this.cateId = this.route.snapshot.params.cateId;
    this.productService.getProductById(this.cateId, this.productId)
      .subscribe(data => {
        this.productForm.setValue({
          name: data.name,
          image: data.image,
          price: data.price,
          detail: data.detail,
          amount: data.amount,
          status: data.status,
          cate_id: this.cateId,
        });
      });
  }
  saveProduct() {
    this.productService.editProduct(this.cateId, this.productId, this.productForm.value)
      .subscribe(data => {
        this.router.navigate([`/category/${this.cateId}`]);
      });
  }
}
