 import { Injectable } from '@angular/core';

import { Product } from './product.model';

import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';

  @Injectable()                          //it can injected as dependency
export class ProductRepository {
  private products: Product[] = [];

  private categories: any[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getProducts().subscribe((data) => {
      this.products = data;
      this.categories = data.map((p) => p.category)
       .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    });
  }
  getProducts(category:any):Product[]{
    //auto trigger
    return this.products.filter((p)=>category==null|| category==p.category);
  }

  // getProducts(category: string = null): Product[] {
  //   return this.products.filter(
  //     (p) => category == null || category == p.category
  //   );
  // }

  getProduct(id: number): Product | undefined {
    return this.products.find((p) => p.id == id);
  }


  getCategories(): any[] {
    //auto trigger
    return this.categories;
  }
}

