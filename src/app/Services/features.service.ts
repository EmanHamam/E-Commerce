import { Injectable } from '@angular/core';
import { Ifeature } from '../Models/ifeature';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
  featuresList:Ifeature[];
  constructor() { 
    this.featuresList = [
      {
        img:'/assets/img/features/f1.png',
        title:'Free Shipping'
      },
      {
        img:'/assets/img/features/f2.png',
        title:'Online Order'
      },
      {
        img:'/assets/img/features/f3.png',
        title:'Save Money'
      },
      {
        img:'/assets/img/features/f4.png',
        title:'promotions'
      },
      {
        img:'/assets/img/features/f5.png',
        title:'Happy Sell'
      },
      {
        img:'/assets/img/features/f6.png',
        title:'F24/7 Support'
      }
    ]
  }
  getAllFeatures(){
    return this.featuresList;
  }
}
