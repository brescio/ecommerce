import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { initClothes, retrieveAllClothes } from './redux/clothes/clothes.action';
import { retrieveAllUsers } from './redux/users/users.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(retrieveAllUsers());
    this.store.dispatch(retrieveAllClothes());
  }


}
