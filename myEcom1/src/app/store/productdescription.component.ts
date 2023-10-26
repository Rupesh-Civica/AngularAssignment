import { Product } from './../model/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductRepository } from '../model/product.repository';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'productdescription',
  templateUrl: 'productdescription.component.html',
})
export class ProductDescriptionComponent implements OnInit {
  product: Product = new Product();
  constructor(
    activeRoute: ActivatedRoute,
    private repository: ProductRepository,
    public cart: Cart,
    private router: Router
  ) {
    Object.assign(
      this.product,
      repository.getProduct(activeRoute.snapshot.params['id'])
    );
  }

  addToCart(product: Product) {
    this.cart.addLine(product);
    this.router.navigateByUrl('/cart');
  }
  ngOnInit() {}
}
