import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { IProduct } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: IProduct[] = [];
  constructor(public cartService: CartService) {}

  remove(i: number) {
    this.cartService.removeProduct(i);
  }
}
