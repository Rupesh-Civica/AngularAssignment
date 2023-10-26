import { OrderRepository } from './../model/order.repository';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from '../model/order.model';
import { Cart } from '../model/cart.model';

// import { OrderRepository } from '../model/order.repository';

// import { Order } from '../model/order.model';

@Component({
  selector: 'checkout',

  templateUrl: 'checkout.component.html',

  styleUrls: ['checkout.component.css'],
})
export class CheckoutComponent {
  orderSent: boolean = false;

  submitted: boolean = false;

  constructor(
    public repository: OrderRepository,
    public order: Order,
    public cart: Cart
  ) {}

  submitOrder(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.repository.saveOrder(this.order).subscribe((order) => {
        this.order.clear();

        this.orderSent = true;

        this.submitted = false;
        this.cart.notApplyCoupon();
      });
    }
  }
}
