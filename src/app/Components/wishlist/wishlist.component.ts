import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {faTimesCircle } from '@fortawesome/free-solid-svg-icons'; 
import { ShoppingCartItems } from 'src/app/Models/shopping-cart-items';
import { ShoppingWishlistItem } from 'src/app/Models/shopping-wishlist-item';
import { CartService } from 'src/app/Services/cart.service';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{
  removeIcon=faTimesCircle;
  recievedprds:ShoppingWishlistItem[]=[];
  constructor( private prdservice:ProductsServiceService,private wishlistService:WishlistService){
                 
  }
 
  ngOnInit(): void {
    this.recievedprds=this.prdservice.getFavChoisenprds();
    // console.log(this.recievedprds);
    
  }
  

  RemoveItem(idx: number) {
    const removedProduct = this.recievedprds[idx];
    this.wishlistService.removeFromWishlist();
    this.recievedprds.splice(idx, 1);
    if (this.recievedprds.length === 0) {
      this.wishlistService.wishlistCount = 0;
    }
  

    this.wishlistService.productRemovedFromWishlist.emit(removedProduct.ProductID);  }
 

}
