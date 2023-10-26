import { ProductDescriptionComponent } from './productdescription.component';
import { Component } from '@angular/core';

import { Product } from '../model/product.model';

import { ProductRepository } from '../model/product.repository';
import { Cart } from '../model/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'store',
  templateUrl: 'store.component.html',
})

export class StoreComponent {
  public selectedCategory :any= null;      //'category 1' -->null
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: ProductRepository,public cart:Cart,private router:Router,private description:ProductDescriptionComponent) {}

  get categories(): string[] {
    return this.repository.getCategories();
  }


  get products(): Product[] { //ECMA5 Accessor property - auto getters and auto setters.

    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository.getProducts(this.selectedCategory)
    .slice(pageIndex, pageIndex + this.productsPerPage);

  }


   changeCategory(newCategory?: any) {
    this.selectedPage=1;
    this.selectedCategory = newCategory;
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: any) {
    this.productsPerPage = Number(newSize.target.value);

    this.changePage(1);
  }

/*   get pageCount(): number {
    return Math.ceil(
      this.repository.getProducts(this.selectedCategory).length /
        this.productsPerPage
    );
  } */

  get pageNumbers(): number[] {

     return Array(Math.ceil(this.repository

         .getProducts(this.selectedCategory).length / this.productsPerPage))

             .fill(0).map((x, i) => i + 1);

  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart");
}
}




