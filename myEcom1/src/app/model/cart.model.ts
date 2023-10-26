import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable()
export class Cart {
    public lines: CartLine[] = [];
    public itemCount: number = 0;
    public cartPrice: number = 0;
    public discount: number = 0;
    public netTotal: number = 0;
    public session:any;
    // public activeCoupon:boolean=false;


    addLine(product: Product, quantity: number = 1) {
        let line = this.lines.find(line => line.product.id == product.id);
        if (line != undefined) {
            line.quantity += quantity;
        } else {
            this.lines.push(new CartLine(product, quantity));
        }
        this.recalculate();
    }


    updateQuantity(product: Product, quantity: any) {
        let line = this.lines.find(line => line.product.id == product.id);
        if (line != undefined) {
            line.quantity = Number(quantity.target.value);
        }
        this.recalculate();
    }

    removeLine(id: number) {
        let index = this.lines.findIndex(line => line.product.id == id);
        this.lines.splice(index, 1);
        this.recalculate();
    }

    clear() {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
        this.discount = 0;
        this.netTotal = 0;
    }

    private recalculate() {

        this.itemCount = 0;
        this.cartPrice = 0;
        this.discount = 0;
        this.netTotal = 0;
        this.lines.forEach(l => {
            this.itemCount += l.quantity;
            this.cartPrice += (l.quantity * l.product.price);
            this.discount = this.cartPrice*0.10;
            this.netTotal =this.cartPrice-this.discount;
        })
    }

    activeCoupons(){
      let data:any={activeCoupon:true};
      localStorage.setItem('activeCoupon',JSON.stringify(data));
      this.notApplyCoupon();
    }
    deactivateCoupons(){
      let data:any={activeCoupon:false};
      localStorage.setItem('activeCoupon',JSON.stringify(data));
      this.notApplyCoupon();
    }
    notApplyCoupon(){
      let data:any={applyCoupon:false};
      localStorage.setItem('coupon',JSON.stringify(data));
    }
    activatedCoupon() {
      let data: any = localStorage.getItem('activeCoupon');
      this.session = JSON.parse(data);
      return this.session.activeCoupon;
    }

}

export class CartLine {

    constructor(public product: any,
        public quantity: number) {}

    get lineTotal() {
        return this.quantity * this.product.price;
    }

}
