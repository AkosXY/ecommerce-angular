import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: any[] = []
  cartUpdated = new EventEmitter<number>()

  constructor() {
   this.loadCartFromLocalStorage();
  }

  addToCart(item: any) {
    this.cartItems.push(item);
    this.updateCartInLocalStorage()
    this.emitCartUpdate()
  }

  getCartItems() {
    return this.cartItems;
  }

  getCartItemsForRecomendation() {
    const simpleCartItems = this.cartItems.map(item => ({
      asin: item.asin,
      title: item.title
    }));
    return simpleCartItems
  }

  getItemNumber() {
    return this.cartItems.length
  }

  removeFromCart(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.updateCartInLocalStorage()
      this.emitCartUpdate()
    }

  }

  getTotalPrice() {
    let totalPrice = 0
    for (const item of this.cartItems) {
      const priceValue = parseFloat(item.price.replace('$', ''));
      totalPrice += priceValue;
    }
    return totalPrice.toFixed(2)
  }

  emptyCart() {
    this.cartItems = []
    this.updateCartInLocalStorage()
    this.emitCartUpdate()
  }

  emitCartUpdate() {
    this.cartUpdated.emit(this.getItemNumber());
  }

  updateCartInLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
  
  loadCartFromLocalStorage() {
    const cartItemsFromStorage = localStorage.getItem('cartItems');
    if (cartItemsFromStorage) {
      this.cartItems = JSON.parse(cartItemsFromStorage);
    }
  }
  
}
