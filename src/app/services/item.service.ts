import { Injectable } from '@angular/core';
import { Item } from '../modelos/items';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  items:Item[] = [{
    id:0,
    title: "manzana",
    price: 10.5,
    quantity:4,
    completed:false
  },
  {
    id:1,
    title: "pera",
    price: 3.5,
    quantity:4,
    completed:true
  },
  {
    id:2,
    title: "cambur",
    price: 8.5,
    quantity:5,
    completed:true
  }];

  constructor() { }

  getItem(){
    return this.items
    
  }
  addItem(item:Item){
    this.items.unshift(item);
  }
}
