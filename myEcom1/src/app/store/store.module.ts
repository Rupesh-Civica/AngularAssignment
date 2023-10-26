import { ProductDescriptionComponent } from './productdescription.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { StoreComponent } from './store.component';
import { NgModule } from '@angular/core';
import { ModelModule } from '../model/model.module';
import { cartSummaryComponent } from './cartSummary.component';
import { cartDetail } from './cartDetail.component';
import { CouponComponent } from './coupon.component';
import { ReversePipe } from './discount.pipe';
import { CheckoutComponent } from './checkout.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [BrowserModule,ModelModule,RouterModule,FormsModule],
  declarations: [StoreComponent,cartSummaryComponent,cartDetail,CouponComponent, ReversePipe,CheckoutComponent,ProductDescriptionComponent],     //register and launch
  exports: [StoreComponent,cartDetail,CouponComponent,CheckoutComponent,ProductDescriptionComponent],          //sharing components across angular module   directives & pipes etc
})
export class StoreModule { }
