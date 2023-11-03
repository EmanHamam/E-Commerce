import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { ProductsComponent } from '../products/products.component';
import { CartComponent } from '../cart/cart.component';
import { ShoppingCartItems } from 'src/app/Models/shopping-cart-items';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent implements AfterViewInit {
  selectedCategory:number=0;
  recievedOrderTotalPrice:number=0;
  reciievedprd:ShoppingCartItems[]=[]  
  categories:ICategory[];
  //@ViewChild('ClientName') ClientNameInput:ElementRef|null = null;
 // @ViewChild('ClientName') ClientNameInput:ElementRef|undefined=undefined;
 // @ViewChild('ClientName') ClientNameInput?:ElementRef;
 // @ViewChild('ClientName') ClientNameInput:ElementRef={} as ElementRef;
 //non-null asseration operator  nullلو متاكد انه القيمه مستحيل تكون ب 
  @ViewChild('ClientName') ClientNameInput!:ElementRef;
  @ViewChild('quantity') Quantity!:ElementRef;
  @ViewChild(ProductsComponent) PrdComponent!:ProductsComponent;
  prds:IProduct[] | undefined;
  constructor(){
    this.categories=[
      {ID:1,Name:"Blouses&Shirts"},
      {ID:2,Name:"Pants"},
      {ID:3,Name:"Bags"},
      {ID:4,Name:"Shoes"},
      {ID:5,Name:"Jewelry"}
  ]
  }
  ngAfterViewInit(): void {
    this.ClientNameInput.nativeElement.style.backgroundColor="#FACE";
    this.Quantity.nativeElement.value=this.Quantity.nativeElement.value;
    this.prds=this.PrdComponent.productOfCat;
    
    
  }
  updateTotalPrice(TotalPrice:number){
      this.recievedOrderTotalPrice=TotalPrice;
  }
  ShoppingCartItemSend(prd:ShoppingCartItems){
   this.reciievedprd.push(prd);

   console.log(prd);
   
  }
  RemoveItem(idx:number){
    this.reciievedprd.splice(idx,1);
  }
  disableplus(items:number):boolean{
   return this.Quantity.nativeElement.value<items;
  }
  SubItem(){
   
    this.Quantity.nativeElement.value--;
  }
  AddItem(){
 
    this.Quantity.nativeElement.value++;
  

  }
  Cofirm(){
    for(let i  of this.reciievedprd){
      
    }
  }
}
