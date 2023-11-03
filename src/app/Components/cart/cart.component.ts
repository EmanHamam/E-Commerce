import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {faTimesCircle } from '@fortawesome/free-solid-svg-icons'; 
import { ShoppingCartItems } from 'src/app/Models/shopping-cart-items';
import { CartService } from 'src/app/Services/cart.service';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  removeIcon=faTimesCircle;
  orderTotalPrice: number = 0;
  removeOrderPrice: number = 0;
  list:Map<number,number> = new Map<number,number>();
  recievedprds:ShoppingCartItems[]=[];
  
  constructor( private prdservice:ProductsServiceService,private cartService:CartService){
                 
  }
 
  ngOnInit(): void {
    this.recievedprds=this.prdservice.getChoisenprds();
    //this.cartService.addToCart();
    console.log(this.recievedprds);
    this.updateSubtotals();
    this.calculateTotal();
    
  }
  updateSubtotals(): void {
    for (let i = 0; i < this.recievedprds.length; i++) {
      this.updateSubtotal(i);
    }
  }
  updateSubtotal(index: number): void {               
    const prd = this.recievedprds[index];
    prd.Subtotal = prd.Selectedquantity * prd.Unitprice;
    console.log(this.prdservice.productList[index].quantity);
    // this.prdservice.productList[index].quantity;
    if(this.prdservice.productList[index].quantity >= prd.Selectedquantity)
    this.prdservice.productList[index].quantity -= prd.Selectedquantity;
  else{
    this.prdservice.productList[index].quantity=0;
  }
   console.log(this.prdservice.productList[index].quantity);
   
  }
  
  subtotal(index: number): number {
    const prd = this.recievedprds[index];
    return prd.Subtotal;
  }
  
  calculateTotal(): number {
    this.orderTotalPrice=0;
    for(let i = 0; i < this.recievedprds.length;i++) {
      this.orderTotalPrice+=this.recievedprds[i].Subtotal;
    }
    
      return this.orderTotalPrice
    
  }

  RemoveItem(idx:number){

    this.cartService.removeFromCart();
    const prd = this.recievedprds[idx];
    const index = this.prdservice.productList.findIndex((product) => product.id == prd.ProductID);
    console.log(index);
    if(index!=-1){
    this.prdservice.productList[index].quantity+= prd.Selectedquantity;
    this.prdservice.productList[index].inTheCart=false;
    console.log(this.prdservice.productList[0]);
    
    }
    this.recievedprds.splice(idx,1);
    if (this.recievedprds.length == 0) {
      this.cartService.cartCount = 0;
    }
  }
 

}

