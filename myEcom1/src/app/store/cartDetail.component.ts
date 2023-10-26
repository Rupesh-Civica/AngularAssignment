import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'cart-detail',
  templateUrl: 'cartDetail.component.html',
})
export class cartDetail implements OnInit {
  // applyCoupon: boolean = false;
  constructor(public cart: Cart) {}

  ngOnInit() {}

  
  applyCoupons() {
    //  this.applyCoupon = true;
    let data:any={applyCoupon:true};
    localStorage.setItem('coupon',JSON.stringify(data));

  }
  appliedCoupon() {
    let coupon: any = localStorage.getItem('coupon');
    this.cart.session = JSON.parse(coupon);
    console.log(this.cart.session.applyCoupon);
    return this.cart.session.applyCoupon;
  }




}
