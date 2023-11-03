import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPrdDetails } from 'src/app/Models/iprd-details';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsApiService } from 'src/app/Services/products-api.service';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faStar as fullstar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptystar } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/Services/cart.service';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit {
  currId: number = 0;
  idx: number = -1;
  prdIds: number[] = [];
  prdDatails: IPrdDetails | undefined = undefined;
  product!: IProduct;
  subscriblst: Subscription[] = [];
  cartIcon = faCartPlus;
  fstar = fullstar;
  estar = emptystar;
  details = faEye;
  regularHeart = faRegularHeart;
  solidHeart = faSolidHeart;
  heart = faHeart;
  shoppingBag = faCartShopping;

  products: IProduct[] | undefined;
  constructor(
    public prdservice: ProductsServiceService,
    private activeroute: ActivatedRoute,
    public loc: Location,
    private router: Router,
    public prdApiService: ProductsApiService,
    carService: CartService
  ) {}
  ngOnInit(): void {
    this.products = this.prdservice.prdDetailsProducts;
    this.prdIds = this.prdservice.getAllIDs();
    this.currId = this.activeroute.snapshot.paramMap.get('pid')
      ? Number(this.activeroute.snapshot.paramMap.get('pid'))
      : 0;
    console.log(this.currId);
    this.product = this.prdservice.getProductByid(this.currId);
    this.prdDatails = this.prdservice.getPrdDetailsByid(this.currId);

    let sub = this.activeroute.paramMap.subscribe((params) => {
      this.currId = params.get('pid') ? Number(params.get('pid')) : 0;
      this.product = this.prdservice.getProductByid(this.currId);
      this.prdDatails = this.prdservice.getPrdDetailsByid(this.currId);
    });
    console.log(this.product.price);
  }

  goToBack() {
    this.loc.back();
  }
  goToPrevPrd() {
    let curridx = this.prdIds.findIndex((val) => val == this.currId);
    //alert(curridx);
    if (curridx != 0) {
      this.currId = this.prdIds[curridx - 1];
      this.router.navigate(['/ProductDetails', this.currId]);
    }
  }
  goToNextPrd() {
    let curridx = this.prdIds.findIndex((val) => val == this.currId);
    //alert(curridx);
    if (curridx < this.prdIds.length - 1) {
      this.currId = this.prdIds[curridx + 1];
      this.router.navigate(['/ProductDetails', this.currId]);
    }
  }
  isFirstPrd(): boolean {
    return this.currId == this.prdIds[0];
  }
  isLastPrd(): boolean {
    return this.currId == this.prdIds[this.prdIds.length - 1];
  }
  updateMainImage(newSrc: string) {
    if (this.product) {
      this.product.img = newSrc;
    }
  }
  toggleWishlist(prd: IProduct, index: number) {
    prd.isFavSolid = !prd.isFavSolid;
    if (!prd.isFavSolid) {
      const productIndex = this.prdservice.choisenfavPrds.findIndex(
        (prdd) => prdd.ProductID === prd.id
      );

      if (productIndex !== -1) {
        const removedItem = this.prdservice.choisenfavPrds.splice(
          productIndex,
          1
        )[0];
        this.prdservice.RemoveItem(removedItem.ProductID);
        prd.inTheCart = false;
      }
    } else {
      this.prdservice.ShoppingCartFavItemSend(
        {
          ProductID: prd.id,
          ProductName: prd.name,
          Unitprice: prd.price,
          Img: prd.img,
          inTheCart: !prd.isFavSolid,
          prdQuatity: prd.quantity,
        },
        index
      );
      this.idx++;
    }
  }
  addtoCart(prd: IProduct, id: number, inTheCart: boolean) {
    const index = this.prdservice.productList.findIndex((product) => product.id == id);
    console.log(index);
    if (index != -1) {
      this.prdservice.ShoppingCartItemSend({
        ProductID: prd.id,
        ProductName: prd.name,
        Unitprice: prd.price,
        Img: prd.img,
        prdQuatity: prd.quantity,
        Subtotal: 1 * prd.price,
        Selectedquantity: 1,
        inTheCart: true,
      }, index, inTheCart);
    } else {
      console.log('Product not found in the product list.');
    }
  }
  addtoWishlist(prd: IProduct, id: number) {
    const index = this.prdservice.productList.findIndex((product) => product.id == id);
    console.log(index);
    if (index != -1) {
      this.prdservice.ShoppingCartFavItemSend({
        ProductID: prd.id,
        ProductName: prd.name,
        Unitprice: prd.price,
        Img: prd.img,
        prdQuatity: prd.quantity,
        inTheCart: true,
      }, index);
    } else {
      console.log('Product not found in the product list.');
    }
  }
  
  
  
  
  
  
}
