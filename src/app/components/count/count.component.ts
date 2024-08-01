import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-count',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './count.component.html',
  styleUrl: './count.component.css'
})
export class CountComponent {
  
  number: Observable<number>
  constructor(
    private store : Store<{number: number}>
  ){
    this.number = this.store.select("number")
  }

  
}
