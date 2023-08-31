import { Component } from '@angular/core';
import { ApiService, IProduct } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  public products: IProduct[] = [];
  constructor(public api: ApiService, private cartService: CartService) {}

   addToCart(product: IProduct) {
    this.cartService.addProduct(product);
  }
}
