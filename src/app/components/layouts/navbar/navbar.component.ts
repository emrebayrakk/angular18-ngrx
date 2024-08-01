import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BasketModel } from '../../../models/basket.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  basketCount = 0;
  baskets: BasketModel[];

  constructor(
    private store: Store<{ "baskets": BasketModel[] }>
  ) {
    this.store.select("baskets").subscribe(res=>{
      this.basketCount = res.length;
      this.baskets = res;
    })
  }

  ngOnInit(): void {
  }
}
