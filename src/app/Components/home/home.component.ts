import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';  
import { Ifeature } from 'src/app/Models/ifeature';
import { IProduct } from 'src/app/Models/iproduct';
import { ShoppingCartItems } from 'src/app/Models/shopping-cart-items';
import { CartService } from 'src/app/Services/cart.service';
import { FeaturesService } from 'src/app/Services/features.service';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'; 
import { faEye } from '@fortawesome/free-regular-svg-icons'; 
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faStar as fullstar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptystar } from '@fortawesome/free-regular-svg-icons'; 
import { Router } from '@angular/router';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    star=faStar;
    cartIcon=faCartPlus;
  fstar=fullstar;
  estar=emptystar;
  details=faEye;
  regularHeart = faRegularHeart;
  solidHeart = faSolidHeart;
    product1: IProduct[] = [];
    product2: IProduct[] = [];
    features:Ifeature[]=[];
    @Output() changedOrderTotalPrice:EventEmitter<number>;
  @Output() shoppingCartItem :EventEmitter<ShoppingCartItems>;
  idx:number=-1;
    constructor(public prdService:ProductsServiceService,public router:Router,private featureService:FeaturesService
                        ,private cartService:CartService,public wishlistService:WishlistService){
                          this.wishlistService.productRemovedFromWishlist.subscribe((productId: number) => {
                            // Find the product with the matching ProductID and set isFavSolid to false
                            const product1 = this.product1.find((prd) => prd.id === productId);
                            const product2 = this.product2.find((prd) => prd.id === productId);

                            if (product1) {
                              product1.isFavSolid = false;
                            }
                            else if(product2) {
                              product2.isFavSolid = false;
                            }
                          }); 
      this.changedOrderTotalPrice=new EventEmitter<number>();
      this.shoppingCartItem=new EventEmitter<ShoppingCartItems>();
    }
  ngOnInit(): void {
    this.product1=this.prdService.getAllProducts1();
    this.product2=this.prdService.getAllProducts2();
    this.features=this.featureService.getAllFeatures();
    
  }

  toggleWishlist(prd: IProduct, index: number) {
    prd.isFavSolid = !prd.isFavSolid;
    if (!prd.isFavSolid) {
      const productIndex = this.prdService.choisenfavPrds.findIndex((prdd) => prdd.ProductID === prd.id);
  
      if (productIndex !== -1) {
        const removedItem = this.prdService.choisenfavPrds.splice(productIndex, 1)[0];
        this.prdService.RemoveItem(removedItem.ProductID);
        prd.inTheCart = false;
      }
    }
     else {
      this.prdService.ShoppingCartFavItemSend({
        ProductID:prd.id ,
        ProductName: prd.name,
        Unitprice: prd.price,
        Img: prd.img,
        inTheCart: !prd.isFavSolid,
        prdQuatity:prd.quantity 
      }, index);
      this.idx++;
      
    }
    
  
  }


}
