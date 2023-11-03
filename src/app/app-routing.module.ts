import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';
import { GroupRoutesComponent } from './group-routes/group-routes.component';
import { CartComponent } from './Components/cart/cart.component';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { ThankYouComponent } from './Components/thank-you/thank-you.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { AccountComponent } from './Components/account/account.component';



let routes:Routes=[
  {path:'',component:GroupRoutesComponent,children:[
    {path:'',redirectTo:'/Home',pathMatch:"full"},
  {path:'Home',component:HomeComponent,title:"Home Page"},
  {path:'Products',component:ProductsComponent,title:"Products List Page"},
  {path:"AboutUs",component:AboutUsComponent,title:"About us page"},
  {path:"ContactUs",component:ContactUsComponent,title:"Contact us page"},
  {path:'Cart',component:CartComponent,title:"Cart" },
  {path:'Wishlist',component:WishlistComponent,title:"Wishlist" },
  {path:'Account',component:AccountComponent,title:"Account" },
  {path:'ProductDetails/:pid',component:ProductdetailsComponent,title:'ProductDetails'},
  {path:'CheckOut',component:CheckOutComponent,title:'check-out'},
  {path:'ThanYou',component:ThankYouComponent,title:'thank-you'},

   ]
  },

  // {path:'',redirectTo:'/Home',pathMatch:"full"},
  // {path:'Home',component:HomeComponent,title:"Home Page"},
  // {path:'Products',component:OrderMasterComponent,title:"Products List Page"},
  // {path:"AboutUs",component:AboutUsComponent,title:"About us page"},
  // {path:"ContactUs",component:ContactUsComponent,title:"Contact us page"},
  // {path:'ProductDetails/:pid',component:ProductdetailsComponent,title:'ProductDetails'},

   {path:'**',component:NotFoundComponent,title:"Not Found Page"},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)

  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
