import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ProductModel } from '../../models/product.model';
import { BasketModel } from '../../models/basket.model';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  products: ProductModel[] = [];
  constructor(
    private _product: ProductService,
    private _basket : BasketService
  ){
    this._product.getList(()=>this.products = _product.products);
    
  }
  ngOnInit() {
  }
  addBasket(product:ProductModel){
    let basketModel = new BasketModel();
    basketModel.product = product;
    basketModel.quantity = 1;

    this._basket.post(basketModel);
  }
}
