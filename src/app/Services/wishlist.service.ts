import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  productRemovedFromWishlist = new EventEmitter<number>();
  public wishlistCount: number = 0;

  getWishlistCount(): number {
    return this.wishlistCount;
  }

  addToWishlist(): void {
    this.wishlistCount++;
  }

  removeFromWishlist(): void {
    if (this.wishlistCount > 0) {
      this.wishlistCount--;
    }
  }
}
