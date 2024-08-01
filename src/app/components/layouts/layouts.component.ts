import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, RouterLink, AppComponent],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css'
})
export class LayoutsComponent {

}
