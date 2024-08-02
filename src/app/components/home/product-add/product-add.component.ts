import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit {

  @ViewChild("addForm") addForm: NgForm;
  constructor(
    private _product : ProductService
  ){

  }
  ngOnInit(): void {
    
  }

  addProduct(){
    if(this.addForm.valid){
      this._product.post(this.addForm.value,()=> this.addForm.reset());
    }
  }
}
