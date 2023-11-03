import { Component, ElementRef, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'; 
import { faOutdent} from '@fortawesome/free-solid-svg-icons'; 
import { faSearch} from '@fortawesome/free-solid-svg-icons'; 
import { faUser} from '@fortawesome/free-regular-svg-icons';
import { faHeart} from '@fortawesome/free-regular-svg-icons'; 
import { faXmark} from '@fortawesome/free-solid-svg-icons'; 
import { CartService } from 'src/app/Services/cart.service';
import { WishlistService } from 'src/app/Services/wishlist.service';
import { Store } from 'src/app/Models/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  shoppingBag=faCartShopping;
  faOutdent=faOutdent;
  search=faSearch;
  user=faUser;
  heart=faHeart;
  close=faXmark;
  selectedCategory:number=0;
  categories:ICategory[];
  store:Store=new Store("EmmaStore",["Qena","Sohag"],"assets/img/fashionStore.png");
  @ViewChild('nav', { static: false }) nav!: ElementRef;
  navActive: boolean = false; // Track the state of the navigation
  constructor(public cartService:CartService,public wishlistService:WishlistService){
     this.categories=[
      {ID:1,Name:"Blouses&Shirts"},
      {ID:2,Name:"Pants"},
      {ID:3,Name:"Bags"},
      {ID:4,Name:"Shoes"},
      {ID:5,Name:"Jewelry"}
  ]
  
  }

  toggleNav() {
    if (this.nav) {
      this.navActive = !this.navActive; // Toggle the state
      if (this.navActive) {
        this.nav.nativeElement.classList.add('active');
      } else {
        this.nav.nativeElement.classList.remove('active');
      }
    }
  }



}
