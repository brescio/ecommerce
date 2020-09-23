import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { CartItem } from 'src/app/core/model/cart-item.interface';
import { addItemToCart } from 'src/app/redux/cart/cart.action';
import { getClothesById } from 'src/app/redux/clothes';


@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit {

  private subscription: Subscription = new Subscription();

  @Input()
//  clothes: CartItem;

  productForm: FormGroup;
  
  clothes: CartItem;
  prodottoCarrello: CartItem = {
    id:0,
    imgPath: "",
    name: "",
    color:"",
    text:"",
    textColor:"", 
   };
  constructor(private route: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    this.subscription.add(this.route.params.pipe(
      filter(params => params != null && params['id'] != null),
      switchMap(params => this.store.pipe(select(getClothesById, { id: Number(params['id']) }))),
    ).subscribe(clothes => {
      this.clothes = clothes;
      console.log(this.clothes)
    }));
  }


  editForm(cartItem: CartItem) {
    this.store.dispatch(addItemToCart({cartItem}));
    this.clothes = cartItem;
  }

  undo() {
    this.clothes = this.clothes;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

/*
  changeImage(id:number){
    switch(id){
        case -1: this.immagine=null;
        break;
        case 0: this.immagine= "../../../assets/product/versace.jpg";
        break;
        case 1: this.immagine= "../../../assets/product/gucci.jpg";
        break;
        case 2: this.immagine= "../../../assets/product/vitton.jpg";
        break;
        case 3: this.immagine= "../../../assets/product/hermes.jpg";
        break;
    }
  }*/
  aggiungiAlCarrello(){
    this.prodottoCarrello.id=this.clothes.id;
    this.prodottoCarrello.name=this.clothes.name;
    this.prodottoCarrello.color=this.productForm.get('colore').value;
    this.prodottoCarrello.text=this.productForm.get('testo').value;
    console.log(this.prodottoCarrello);
  }
  ripristina(){
    this.productForm.reset();
  }
}

