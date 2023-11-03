import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { ShoppingCartItems } from '../Models/shopping-cart-items';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; 
import { IPrdDetails } from '../Models/iprd-details';
import { Router } from '@angular/router';
import { CartService } from './cart.service';
import { ICategory } from '../Models/icategory';
import { ShoppingWishlistItem } from '../Models/shopping-wishlist-item';
import { WishlistComponent } from '../Components/wishlist/wishlist.component';
import { WishlistService } from './wishlist.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
 public productList:IProduct[];
  product1:IProduct[];
  product2:IProduct[];
  prdDetailsProducts:IProduct[];
  prdDetaills:IPrdDetails[];
  categories: ICategory[];
  indicesToKeep :number[]= [4, 5, 9, 13];
  public choisenPrds:ShoppingCartItems[]=[];
  public choisenfavPrds:ShoppingWishlistItem[]=[];

  public soildHeart=faHeart;
    @Input() recivedSelectedCategoryId: number = 0;
  orderTotalPrice: number = 0;
  @Output() changedOrderTotalPrice:EventEmitter<number>;
  @Output() shoppingCartItem :EventEmitter<ShoppingCartItems>;
  constructor ( public router:Router,private cartService:CartService,public wishlistService:WishlistService) {
    this.productList = [
      {

        name: 'Floral Hawaiian Shirt',
        id: 5,
        cateogryID: 1,
        price: 24,
        quantity: 3,
        brand:'VATPAVE',
        img: 'assets/img/products/f1.jpg',
        isFavSolid:false,
        rating:{
          numOfReviews:340,
          rate:3.9
        },
        fullStars:new Array(4),
        emptyStars:new Array(1),
        inTheCart:false,
      },
      {
        name: 'Hawaiian Shirts Casual',
        id: 2,
        cateogryID: 1,
        price: 30,
        quantity: 0,
        brand:'VATPAVE',
        img: 'assets/img/products/f2.jpg',
        isFavSolid:false,
        rating:{
          numOfReviews:390,
          rate:4.8
        },
        fullStars:new Array(5),
        emptyStars:new Array(0),
        inTheCart:false,
       
      },
      {
        name: 'Summer Tropical Shirts',
        id: 55,
        cateogryID: 1,
        price: 35,
        quantity: 1,
        brand:'VATPAVE',
        img: 'assets/img/products/f3.jpg',
        isFavSolid:false,
        rating:{
          numOfReviews:290,
          rate:2.9
        }
        ,fullStars:new Array(3),
        emptyStars:new Array(2),
        inTheCart:false,
        
      },
      {
        name: 'Unisex Casual Aloha Floral Shirts',
        id: 1,
        cateogryID: 1,
        brand:'Simmashah',
        price: 49,
        quantity: 5,
        img: 'assets/img/products/f4.jpg',
        isFavSolid:false,
        rating:{
          numOfReviews:240,
          rate:3.9
        }
        ,fullStars:new Array(4),
        emptyStars:new Array(1),
        inTheCart:false,
        
      },
      {
        name: 'Luxury Casual Hawaiian Shirt',
        id: 7,
        cateogryID: 1,
        price: 20,
        quantity: 3,
        brand:'Daupanzees',
        img: 'assets/img/products/f5.jpg',
        isFavSolid:false,
        rating:{
          numOfReviews:190,
          rate:3.5
        }
        ,fullStars:new Array(3),
        emptyStars:new Array(2),
        inTheCart:false,
      },
      {
        name: 'Legendary Whitetails Plaid Shirt',
        id: 26,
        cateogryID: 1,
        price: 42,
        quantity: 1,
        brand:"Buck Camp",
        img: 'assets/img/products/f6.jpg',
        isFavSolid:false,
        rating:{
          numOfReviews:265,
          rate:3.6
        }
        ,fullStars:new Array(4),
        emptyStars:new Array(1),
        inTheCart:false,
      },
      {
        name: 'Print Cropped Pants Vintage flowers',
        id: 20,
        cateogryID: 2,
        price: 44,
        quantity: 0,
        brand:'Milumia',
        img: 'assets/img/products/f7.jpg',
        isFavSolid:false,
        rating:{
          numOfReviews:195,
          rate:2.6
        }
        ,fullStars:new Array(3),
        emptyStars:new Array(2),
        inTheCart:false,
      },
      {
        name: 'Neck Ruffle Lantern  Casual  Blouse',
        id: 22,
        cateogryID: 1,
        price: 41,
        quantity: 5,
        brand:'MIHOLL',
        img: 'assets/img/products/f8.jpg',
        isFavSolid:false,
        rating:{
          numOfReviews:270,
          rate:3.9
        }
        ,fullStars:new Array(4),
        emptyStars:new Array(1),
        inTheCart:false,
      },
      {
        name: 'Shirt Regular Fit Oxford Solid',
        id: 24,
        cateogryID: 1,
        price: 29,
        quantity: 3,
        brand:'Van Heusen',
        img: 'assets/img/products/n1.jpg',
        isFavSolid:false,
        rating:{
          numOfReviews:325,
          rate:4.5
        }
        ,fullStars:new Array(5),
        emptyStars:new Array(0), 
        inTheCart:false,
      },
      {
        name: 'Mens Button Shirts Regular Fit',
        id: 16,
        cateogryID: 1,
        price: 45,
        quantity: 5,
        brand:'Double Pump',
        img: 'assets/img/products/n2.jpg',
        isFavSolid:false,
        rating:{
          numOfReviews:240,
          rate:3.9
        }
        ,fullStars:new Array(4),
        emptyStars:new Array(1),
        inTheCart:false,
      },
      {
        name: 'Wrinkle Free Regular Fit Stretch',
        id: 9,
        cateogryID: 1,
        price: 20,
        quantity: 3,
        brand:'Alex Vando',
        img: 'assets/img/products/n3.jpg',
        isFavSolid:false,
        rating:{
          numOfReviews:140,
          rate:2.9
        }
        ,fullStars:new Array(3),
        emptyStars:new Array(2),
        inTheCart:false,
      },
      {
        name: "Casual Linen Beach Shirt",
        id: 29,
        cateogryID: 1,
        price: 27,
        quantity: 1,
        brand:'COOFANDY',
        img: 'assets/img/products/n4.jpg',
        isFavSolid:false,
        rating:{
          numOfReviews:130,
          rate:1.9
        }
        ,fullStars:new Array(2),
        emptyStars:new Array(3),
        inTheCart:false,
      },
      {
        name: 'Cowboy Cut Western Snap Work',
        id: 19,
        cateogryID: 1,
        price: 25,
        quantity: 3,
        brand:'Wrangler',
        img: 'assets/img/products/n5.jpg',
        isFavSolid:false,
        rating:{
          numOfReviews:245,
          rate:3.9
        }
        ,fullStars:new Array(4),
        emptyStars:new Array(1),
        inTheCart:false,
      },
      {
        name: 'Western Denim Shirt',
        id: 39,
        cateogryID: 2,
        price: 29,
        quantity: 1,
        brand:'Wrangler',
        img: 'assets/img/products/n6.jpg',
        isFavSolid:false,
        rating:{
          numOfReviews:340,
          rate:2.9
        }
        ,fullStars:new Array(3),
        emptyStars:new Array(2),
        inTheCart:false,
      },
      {
        name: 'Buck Camp Flannel Plaid Shirt',
        id: 42,
        cateogryID: 1,
        price: 30,
        quantity: 5,
        brand:'Legendary Whitetails',
        img: 'assets/img/products/n7.jpg',
        isFavSolid:false,
        rating:{
          numOfReviews:340,
          rate:4.9
        }
        ,fullStars:new Array(5),
        emptyStars:new Array(1),
        inTheCart:false,
      },
      {
        name: 'ECLO Stria Expandable-Waist',
        id: 76,
        cateogryID: 1,
        price: 47,
        quantity: 1,
        brand:'Haggar',
        img: 'assets/img/products/n8.jpg',
        isFavSolid:false,
        rating:{
          numOfReviews:340,
          rate:1.9
        }
        ,fullStars:new Array(2),
        emptyStars:new Array(3),
        inTheCart:false,
       },
       {
        name: 'HRITHIK ROSHAN RUNNING SHOES',
        id: 23,
        cateogryID: 3,
        price: 20,
        quantity: 4,
        brand:'HRX',
        img: 'assets/img/products/p1.jpg',
        isFavSolid:false,
        rating:{
          numOfReviews:290,
          rate:4.00
        },
        fullStars:new Array(4),
        emptyStars:new Array(1),
        inTheCart:false,
       
      },
      {
        name: 'Hrithik Roshan Men Grey',
        id: 72,
        cateogryID: 3,
        price: 22,
        quantity: 0,
        brand:'HRX',
        img: 'assets/img/products/p2.jpg',
        isFavSolid:false,
        rating:{
          numOfReviews:276,
          rate:3.9
        },
        fullStars:new Array(4),
        emptyStars:new Array(1),
        inTheCart:false,
       
      },
      {
        name: 'Active Men Socks',
        id: 82,
        cateogryID: 3,
        price: 10,
        quantity: 5,
        brand:'HRX',
        img: 'assets/img/products/p3.jpg',
        isFavSolid:false,
        rating:{
          numOfReviews:176,
          rate:2.9
        },
        fullStars:new Array(3),
        emptyStars:new Array(2),
        inTheCart:false,
       
      },
      {
        name: 'Reebok All Terrain Craze',
        id: 92,
        cateogryID: 3,
        price: 22,
        quantity: 4,
        brand:'Accueil',
        img: 'assets/img/products/p4.jpg',
        isFavSolid:false,
        rating:{
          numOfReviews:276,
          rate:3.9
        },
        fullStars:new Array(4),
        emptyStars:new Array(1),
        inTheCart:false,
       
      },
      {
        name: 'Black Analog Watch ',
        id: 102,
        cateogryID: 4,
        price: 22,
        quantity: 3,
        brand:'Fossil',
        img: 'assets/img/products/s1.jpg',
        isFavSolid:false,
        rating:{
          numOfReviews:376,
          rate:4.5
        },
        fullStars:new Array(5),
        emptyStars:new Array(0),
        inTheCart:false,
       
      },
      
      
    ];
    this.product1=this.productList.filter((item, index) => index < 8);
    this.product2=this.productList.filter((item, index) => index < 16 && index>=8);
    this.prdDetailsProducts=this.productList.filter((item, index) => this.indicesToKeep.includes(index));
    this.prdDetaills=[
      {
       id:5,
        mainImg:'assets/img/products/f1.jpg',
        smallImg1:'assets/img/products/f2.jpg',
        smallImg2:'assets/img/products/f3.jpg',
        smallImg3:'assets/img/products/f4.jpg',
      },
      {
        id:2,
        mainImg:'assets/img/products/f2.jpg',
        smallImg1:'assets/img/products/f1.jpg',
        smallImg2:'assets/img/products/f3.jpg',
        smallImg3:'assets/img/products/f4.jpg',
      },
      {
        id:55,
        mainImg:'assets/img/products/f3.jpg',
        smallImg1:'assets/img/products/f2.jpg',
        smallImg2:'assets/img/products/f1.jpg',
        smallImg3:'assets/img/products/f4.jpg',
      },
      {
        id:1,
        mainImg:'assets/img/products/f4.jpg',
        smallImg1:'assets/img/products/f2.jpg',
        smallImg2:'assets/img/products/f3.jpg',
        smallImg3:'assets/img/products/f1.jpg',
      },
      {
        id:7,
        mainImg:'assets/img/products/f5.jpg',
        smallImg1:'assets/img/products/f52.jpeg',
        smallImg2:'assets/img/products/f53.jpeg',
        smallImg3:'assets/img/products/f54.jpg',
      },
      {
        id:26,
        mainImg:'assets/img/products/f6.jpg',
        smallImg1:'assets/img/products/f62.jpg',
        smallImg2:'assets/img/products/f63.jpg',
        smallImg3:'assets/img/products/f64.jpg',
      },
      {
        id:20,
        mainImg:'assets/img/products/f7.jpg',
        smallImg1:'assets/img/products/f72.jpg',
        smallImg2:'assets/img/products/f73.jpg',
        smallImg3:'assets/img/products/f7.jpg',
      },
      {
        id:22,
        mainImg:'assets/img/products/f8.jpg',
        smallImg1:'assets/img/products/f82.jpg',
        smallImg2:'assets/img/products/f83.jpg',
        smallImg3:'assets/img/products/f8.jpg',
      },
      {
        id:24,
        mainImg:'assets/img/products/n1.jpg',
        smallImg1:'assets/img/products/n12.jpg',
        smallImg2:'assets/img/products/n13.jpg',
        smallImg3:'assets/img/products/n14.jpeg',
      },
      {
        id:16,
        mainImg:'assets/img/products/n2.jpg',
        smallImg1:'assets/img/products/n22.jpeg',
        smallImg2:'assets/img/products/n23.jpeg',
        smallImg3:'assets/img/products/n24.jpeg',
      },
      {
        id:9,
        mainImg:'assets/img/products/n3.jpg',
        smallImg1:'assets/img/products/n32.jpg',
        smallImg2:'assets/img/products/n33.jpg',
        smallImg3:'assets/img/products/n34.jpg',
      },
      {
        id:29,
        mainImg:'assets/img/products/n4.jpg',
        smallImg1:'assets/img/products/n4222.jpeg',
        smallImg2:'assets/img/products/n43.jpg',
        smallImg3:'assets/img/products/n44.jpg',
      },
      {
        id:19,
        mainImg:'assets/img/products/n5.jpg',
        smallImg1:'assets/img/products/n522.jpg',
        smallImg2:'assets/img/products/n53.jpg',
        smallImg3:'assets/img/products/n54.jpg',
      },
      {
        id:39,
        mainImg:'assets/img/products/n6.jpg',
        smallImg1:'assets/img/products/n62.jpg',
        smallImg2:'assets/img/products/n63.jpg',
        smallImg3:'assets/img/products/n64.jpg',
      },
      {
        id:42,
        mainImg:'assets/img/products/n7.jpg',
        smallImg1:'assets/img/products/n72.jpg',
        smallImg2:'assets/img/products/n73.jpg',
        smallImg3:'assets/img/products/n74.jpg',
      },
      {
        id:76,
        mainImg:'assets/img/products/n8.jpg',
        smallImg1:'assets/img/products/n82.jpg',
        smallImg2:'assets/img/products/n822.jpg',
        smallImg3:'assets/img/products/n84.jpg',
      },
      {
        id:23,
        mainImg:'assets/img/products/p1.jpg',
        smallImg1:'assets/img/products/p12.jpg',
        smallImg2:'assets/img/products/p13.jpeg',
        smallImg3:'assets/img/products/p14.jpeg',
      },
      {
        id:72,
        mainImg:'assets/img/products/p2.jpg',
        smallImg1:'assets/img/products/p2.jpg',
        smallImg2:'assets/img/products/p2.jpg',
        smallImg3:'assets/img/products/p2.jpg',
      },
      {
        id:82,
        mainImg:'assets/img/products/p3.jpg',
        smallImg1:'assets/img/products/p32.jpeg',
        smallImg2:'assets/img/products/p33.jpg',
        smallImg3:'assets/img/products/p34.jpg',
      },
      {
        id:92,
        mainImg:'assets/img/products/p4.jpg',
        smallImg1:'assets/img/products/p43.jpg',
        smallImg2:'assets/img/products/p42.jpeg',
        smallImg3:'assets/img/products/p44.jpg',
      },
      {
        id:102,
        mainImg:'assets/img/products/s1.jpg',
        smallImg1:'assets/img/products/s13.jpg',
        smallImg2:'assets/img/products/s12.jpeg',
        smallImg3:'assets/img/products/s14.jpg',
      },

    ]
    this.changedOrderTotalPrice=new EventEmitter<number>();
    this.shoppingCartItem=new EventEmitter<ShoppingCartItems>();

    this.categories = [
      { ID: 1, Name: 'Blouses&Shirts' },
      { ID: 2, Name: 'Pants' },
      { ID: 3, Name: 'Shose' },
      { ID: 4, Name: 'Watches' },
    ];
   }
   
   getAllProducts(){
    //  console.log(this.productList);
    return this.productList;
   }
   getAllProducts1(){
    //  console.log(this.productList);
    return this.product1;
   }
   getAllProducts2(){
    //  console.log(this.productList);
    return this.product2;
   }

  getProductsByCat(catid:number):IProduct[]{
    if(catid==0)
    return this.getAllProducts();
  else
   return this.productList.filter(prd=>prd.cateogryID==catid)
  }
  getProductByid(prdid:number):IProduct|any{
    
    return this.productList.find(prd=>prd.id==prdid);
  }
  getPrdDetailsByid(prdid:number):IPrdDetails|any{
    
    return this.prdDetaills.find(prd=>prd.id==prdid);
  }
  AddnewProduct(prd:ShoppingCartItems):void{
    this.choisenPrds.push(prd);
  }
  AddnewFavProduct(prd:ShoppingWishlistItem):void{
    this.choisenfavPrds.push(prd);
  }
  getChoisenprds(){    
    return this.choisenPrds;
  }
  getFavChoisenprds(){    
    return this.choisenfavPrds;
  }
  getAllIDs():number[]{
    return this.productList.map(prd=>prd.id);
  }
  updateTotalPrice(number: number, price: number) {

    this.orderTotalPrice += number * price;
    this.changedOrderTotalPrice.emit(this.orderTotalPrice);
  }
  
  ShoppingCartItemSend(item:ShoppingCartItems,idx:number,inTheCart:boolean){
    console.log("jjjjj",idx);
    if(!inTheCart){
     if(this.productList[idx].quantity>0){
    this.AddnewProduct(item);
    this.productList[idx].quantity--;
    this.cartService.cartCount++;
    this.productList[idx].inTheCart=true;
    
  }}
  else{
    if(this.productList[idx].quantity>0){

    this.productList[idx].quantity--;
    const selectedProduct = this.choisenPrds.find(prd => prd.ProductID == this.productList[idx].id);

    if (selectedProduct) {
      selectedProduct.Selectedquantity++;
    }
    item.Selectedquantity++;
  }
}
  }
  ShoppingCartFavItemSend(item:ShoppingWishlistItem,idx:number){
    this.AddnewFavProduct(item);
    this.wishlistService.wishlistCount++;
  
  }
  RemoveItem(idx: number) {
    this.wishlistService.removeFromWishlist();
    this.choisenfavPrds.splice(idx, 1);
    console.log(this.choisenfavPrds);
    
    if (this.choisenfavPrds.length === 0) {
      this.wishlistService.wishlistCount = 0;
    }
  }

  openProductDetails(prdId: number|undefined){
    this.router.navigate(['/ProductDetails', prdId]);
  }
  isFavSolid = false;
  ChangeIcon(prd: IProduct) {
    prd.isFavSolid = !prd.isFavSolid; 
  }
   }

