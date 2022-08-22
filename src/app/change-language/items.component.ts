import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'

import { Item } from './item'
import { ItemService } from './item.service'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Array<Item>

  constructor(private itemService: ItemService,private routerExtensions: RouterExtensions) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems()
  }
  onRouter(args){
    this.routerExtensions.navigate(
      ["item"],
      {
        animated: true, 
        transition:args
      }
    )
  }
  fade(){
    this.onRouter({
      name: 'fade', 
      duration: 250, 
      curve: 'linear'
    }) 
  }
  flip(){
    this.onRouter({
      name: 'flip', 
      duration: 250, 
      curve: 'linear'
    });
  }
  flipRight(){
    this.onRouter({
      name: 'flipRight', 
      duration: 250, 
      curve: 'linear'
    })
  }
  flipLeft(){
    this.onRouter({
      name: 'flipLeft', 
      duration: 250, 
      curve: 'linear'
    })
  }
  slide(){
    this.onRouter({
      name: 'slide', 
      duration: 250, 
      curve: 'linear'
    })
  }
  slideLeft(){
    this.onRouter({
      name: 'slideLeft', 
      duration: 250, 
      curve: 'linear'
    })
  }
  slideRight(){
    this.onRouter({
      name: 'slideRight', 
      duration: 250, 
      curve: 'linear'
    })
  }
  slideTop(){
    this.onRouter({
      name: 'slideTop', 
      duration: 250, 
      curve: 'linear'
    })
  }
  slideBottom(){
    this.onRouter({
      name: 'slideBottom', 
      duration: 250, 
      curve: 'linear'
    })
  }
}
