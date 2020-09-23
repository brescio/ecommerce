import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CartItem } from 'src/app/core/model/cart-item.interface';
import { initCart } from 'src/app/redux/cart/cart.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  [x: string]: any;

  prosegui:number;
  shippingForm: FormGroup;
  paymentForm: FormGroup;
  cart: CartItem[];
  totPrice: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.prosegui=0;
  }

  next(){
    this.prosegui+=1;
    console.log(this.prosegui)
  }
  back(){
    this.prosegui-=1;
    console.log(this.prosegui)
  }
  remove(id:number, price: number){
    var copy = Array.from(this.cart);
    const index = copy.findIndex(x=> x.id=== id);
    copy.splice(index,1);
    this.cart = copy;
    this.totPrice-=price;
    this.updateCart(this.cart);
  }
  updateCart(cart: CartItem[] ){
    this.store.dispatch(initCart({cart}));
  }

  deleteCurrentCart(){
    let cart: CartItem[] = [];
    this.store.dispatch(initCart({cart}));
  }

  submitForm(){
    console.log("Shipping for submitted" + this.shippingForm.value)
  }
}
