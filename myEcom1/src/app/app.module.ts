import { CheckoutComponent } from './store/checkout.component';
import { cartDetail } from './store/cartDetail.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { RouterModule } from '@angular/router';
import { CouponComponent } from './store/coupon.component';
import { StoreFirstGuard } from './store.FirstGuard';
import { ProductDescriptionComponent } from './store/productdescription.component';



@NgModule({
  imports: [BrowserModule, StoreModule,
    RouterModule.forRoot([
        {
            path: "coupon", component: CouponComponent,
            canActivate: [StoreFirstGuard]
        },
        {
            path: "description", component: ProductDescriptionComponent,
            canActivate: [StoreFirstGuard]
        },
        {
            path: "description/:id", component: ProductDescriptionComponent,
            canActivate: [StoreFirstGuard]
        },
        {
            path: "store", component: StoreComponent,
            canActivate: [StoreFirstGuard]
        },
        {
            path: "cart", component: cartDetail,
            canActivate: [StoreFirstGuard]
        },
        {
            path: "checkout", component: CheckoutComponent,
            canActivate: [StoreFirstGuard]
        },
        { path: "**", redirectTo: "/coupon" }
    ])],
providers: [StoreFirstGuard,ProductDescriptionComponent],
declarations: [AppComponent],
bootstrap: [AppComponent]
})
export class AppModule {}




//   providers: [], //register custom services(injectables)
//   bootstrap: [AppComponent]   //launch
// })
// export class AppModule { }
// //root level entities shouldnt be exposed with model level entities

// //services are shred by nature  (injectables)
