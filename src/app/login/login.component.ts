import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'
import { Page } from '@nativescript/core'
import {AppService} from '../../service/app.service';
 

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  Language;
   
  constructor(
    private routerExtensions: RouterExtensions,
    private page:Page,
    private appService:AppService
    ) {
      this.page.actionBarHidden=true;
    }

  ngOnInit(): void {
    this.Language=this.appService.getLanguage();
  }

  onLanguageSelect(){
    this.routerExtensions.navigate(
      ["change-language"],
      {
        animated: true, 
        transition:{
          name: 'slideLeft', 
          duration: 75, 
          curve: 'ease'
        }
      }
    )
  }
   
}
