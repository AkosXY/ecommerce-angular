import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: any[] = []
  cartUpdated = new EventEmitter<number>()

  constructor() { }

  addToCart(item: any) {
    this.cartItems.push(item);
    this.emitCartUpdate()
  }

  getCartItems() {
    return this.cartItems;
  }

  getItemNumber() {
    return this.cartItems.length
  }

  removeFromCart(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
    this.emitCartUpdate()

  }

  emptyCart() {
    this.cartItems = []
    this.emitCartUpdate()
  }

  emitCartUpdate() {
    this.cartUpdated.emit(this.getItemNumber());
  }

}
