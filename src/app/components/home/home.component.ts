import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ProductModel } from '../../models/product.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  products: ProductModel[] = [];
  constructor(
    private store: Store
  ){

  }
  ngOnInit() {
    this.setProducts();
  }
  setProducts(){
    for(let i=0; i<100; i++){
      let product = new ProductModel();
      product.id = (i+1);
      product.name = 'Product ' + (i+1)
      product.unitPrice = (i+1)*30;
      product.stock = (i+1)*10;

      this.products.push(product);
    }
  }
  addBasket(){
    this.store.dispatch({"type" : "[Baskets] Add Count"})
  }
}
