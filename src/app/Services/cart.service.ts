// cart.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartCount: number = 0;

  getCartCount(): number {
    return this.cartCount;
  }

  addToCart(): void {
    this.cartCount++;
  }

  removeFromCart(): void {
    if (this.cartCount > 0) {
      this.cartCount--;
    }
  }
}
