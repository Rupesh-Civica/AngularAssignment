import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'coupon',
  templateUrl: 'coupon.component.html'
})

export class CouponComponent implements OnInit {
  constructor(public cart:Cart) { }

  ngOnInit() { }
}
