import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { Router } from '@angular/router';
import { ShoppingCartItems } from 'src/app/Models/shopping-cart-items';
import { ProductsApiService } from 'src/app/Services/products-api.service';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'; 
import { faEye } from '@fortawesome/free-regular-svg-icons'; 
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons'; 
import { faStar as fullstar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptystar } from '@fortawesome/free-regular-svg-icons'; 
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons'; 
import { CartService } from 'src/app/Services/cart.service';
import { WishlistComponent } from '../wishlist/wishlist.component';
import { WishlistService } from 'src/app/Services/wishlist.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  cartIcon=faCartPlus;
  fstar=fullstar;
  estar=emptystar;
  arrow=faLongArrowRight;
  details=faEye;
  regularHeart = faRegularHeart;
  solidHeart = faSolidHeart;
  productOfCat: IProduct[] = [];
  categories: ICategory[];
  product!:IProduct|undefined;
  @Input() recivedSelectedCategoryId: number = 0;
  selectedCat: number = 0;
  @Output() changedOrderTotalPrice:EventEmitter<number>;
  @Output() shoppingCartItem :EventEmitter<ShoppingCartItems>;
  idx:number=-1;
  constructor(public prdService:ProductsServiceService , public router:Router,public prdApiService:ProductsApiService
             ,private cartService:CartService,public wishlistService:WishlistService) {

              this.wishlistService.productRemovedFromWishlist.subscribe((productId: number) => {
                const product = this.productOfCat.find((prd) => prd.id === productId);
                if (product) {
                  product.isFavSolid = false;
                }
              });
    this.changedOrderTotalPrice=new EventEmitter<number>();
    this.shoppingCartItem=new EventEmitter<ShoppingCartItems>();
    
  
    this.categories = [
      { ID: 1, Name: 'Blouses&Shirts' },
      { ID: 2, Name: 'Pants' },
      { ID: 3, Name: 'Shose' },
      { ID: 4, Name: 'Watches' },
    ];
    this.productOfCat= this.prdService.getAllProducts();    

  }
  ngOnInit(): void {
    this.productOfCat= this.prdService.getAllProducts();    
}
get filteredProducts() {
  if (this.selectedCat == 0) {
    return this.productOfCat;
  } else {
    return this.productOfCat.filter(product => product.cateogryID == this.selectedCat);
  }
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

