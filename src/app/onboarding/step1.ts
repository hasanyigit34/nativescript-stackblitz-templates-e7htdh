import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'
import { Page } from '@nativescript/core'
import {AppService} from '../../service/app.service';
 

@Component({
  templateUrl: './step1.html',
})
export class Step1Component implements OnInit {
  
   
  constructor(
    private routerExtensions: RouterExtensions,
    private page:Page,
    private appService:AppService
    ) {
      this.page.actionBarHidden=true;
    }

  ngOnInit(): void {
     
  }
  onSwipe(){
    this.routerExtensions.navigate(
      ["onboarding/step2"],
      {
        animated: true, 
        transition:{
          name: 'slideLeft', 
          duration: 200, 
          curve: 'ease'
        }
      }
    )
  }
  
   
}
