import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddCountComponent } from "./components/add-count/add-count.component";
import { CountComponent } from "./components/count/count.component";
import { StoreModule } from '@ngrx/store';
import { CounterReducer } from './components/state/counter.reducer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    AddCountComponent, 
    CountComponent, 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
