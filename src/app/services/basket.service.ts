import { Injectable } from '@angular/core';
import { BasketModel } from '../models/basket.model';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Stores } from '../state/stores';
import * as BasketActions from "../state/baskets/baskets.actions";

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  api: string = "http://localhost:3000/baskets";
  baskets: BasketModel[] = [];
  constructor(
    private _http: HttpClient,
    private store : Store<Stores["baskets"]>
  ) { }

  post(model: BasketModel) {
    // let item = this.get(model.product.id);
    // if(item != null){
    //     model.quantity += 1;
    //     this.put(model);
    // }
    // else{
      this._http.post(this.api, model).subscribe(res=>this.store.dispatch(BasketActions.addBasket({basket: model})));
    // }
  }
  getList(callBack: ()=> void) {
    this._http.get<BasketModel[]>(this.api).subscribe(res => {this.baskets = res; callBack()});
  }
  get(id : number){
    let apiGet = "http://localhost:3000/baskets?product.id=" + id;
    this._http.get<BasketModel>(apiGet).subscribe();
  }
  put(model : BasketModel){
    this._http.put(this.api,model).subscribe();
  }

}
