import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductsComponent } from './Components/products/products.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { HomeComponent } from './Components/home/home.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { GroupRoutesComponent } from './group-routes/group-routes.component';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrderMasterComponent } from './Components/order-master/order-master.component';
import {HttpClientModule}  from'@angular/common/http';
import { CartComponent } from './Components/cart/cart.component';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { ThankYouComponent } from './Components/thank-you/thank-you.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { AccountComponent } from './Components/account/account.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    FooterComponent,
    
    AboutUsComponent,
    HomeComponent,
    ContactUsComponent,
    NotFoundComponent,
  GroupRoutesComponent,
    ProductdetailsComponent,
         OrderMasterComponent,
         CartComponent,
         CheckOutComponent,
         ThankYouComponent,
         WishlistComponent,
         AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
