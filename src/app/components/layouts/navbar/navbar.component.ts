import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BasketModel } from '../../../models/basket.model';
import { Stores } from '../../../state/stores';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  basketCount = 0;
  baskets: BasketModel[];

  constructor(
    private store: Store<Stores["baskets"]>
  ) {
    this.store.select("baskets").subscribe(res=>{
      this.basketCount = res.length;
      this.baskets = res;
    })
  }

  ngOnInit(): void {
  }
}
