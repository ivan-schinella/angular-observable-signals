import { Injectable } from '@angular/core';
import { IProduct } from './api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItems$ = new BehaviorSubject<IProduct[]>([]);
  public subTotal$ = new BehaviorSubject<number>(0);
  public totalItems$ = new BehaviorSubject<number>(0);
  public products: IProduct[] = [];

  constructor() {}

  addProduct(product: IProduct) {
    this.products.push(product);
    this.mapTotal();
  }

  removeProduct(id: number) {
    this.products.splice(id, 1);
    this.mapTotal();
  }

  private mapTotal() {
    const total = this.products.reduce((prev: number, curr: any) => {
      return prev + curr.price;
    }, 0);
    this.subTotal$.next(total);
    this.totalItems$.next(this.products.length);
    this.cartItems$.next(this.products);
  }
}
