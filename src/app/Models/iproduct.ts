export interface IProduct {
    id :number;
    name:string;
    quantity:number;
    price:number;
    brand:string;
    isFavSolid:boolean;
    rating:{
        numOfReviews:number;
        rate:number;
    }
    emptyStars:any[];
    fullStars:any[];
    img:string;
    cateogryID:number;
    inTheCart:boolean;
}
