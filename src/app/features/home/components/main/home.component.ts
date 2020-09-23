import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { getCurrentUser } from 'src/app/redux/users';
import { Router } from '@angular/router';
import { retrieveAllUsers } from 'src/app/redux/users/users.action';
import { CartItem } from 'src/app/core/model/cart-item.interface';
import { selectClothes } from 'src/app/redux/clothes';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  id: number;

  constructor(private store: Store, private router: Router) {
    this.id=1;
  }

  //return clothes using NgRx store
  get clothes(): Observable<CartItem[]> {
    return this.store.pipe(select(selectClothes));
  }

  currentClothesId(n:number){
    this.id = n;
    console.log(this.id);
  }

  goToCustomize(){
    console.log("Cutomize pressed -> " + this.id);
    this.router.navigate(['/customize', this.id-1]);
  }

  ngOnInit(): void {
    console.log(this.id);
  }

}