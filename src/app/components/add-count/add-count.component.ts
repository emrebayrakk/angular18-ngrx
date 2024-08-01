import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { countIncrement } from '../state/counter.action';

@Component({
  selector: 'app-add-count',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-count.component.html',
  styleUrl: './add-count.component.css'
})
export class AddCountComponent {

  constructor(
    private store: Store<any>
  ){
    
  }
  addCount(){
    this.store.dispatch(countIncrement())
  }
}
