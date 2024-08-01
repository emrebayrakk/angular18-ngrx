import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  basketCount!: Observable<number>;

  constructor(
    private store: Store<{ basketCount: number }>
  ) {}

  ngOnInit(): void {
    this.basketCount = this.store.select("basketCount");
  }
}
