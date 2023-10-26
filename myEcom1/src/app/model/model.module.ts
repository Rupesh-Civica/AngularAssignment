import { OrderRepository } from './order.repository';
import { RestDataSource } from './rest.datasource';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Cart } from './cart.model';
import { Order } from './order.model';


@NgModule({
  imports: [HttpClientModule],
  providers: [StaticDataSource,ProductRepository,Cart,OrderRepository,Order,
   {provide:StaticDataSource,useClass:RestDataSource}
],  //register & launch services/Injectables

})
export class ModelModule { } //exclusive service
