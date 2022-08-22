import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'
import { AppService, Language } from '~/service/app.service'

@Component({
  selector: 'ns-change-language',
  templateUrl: './change-language.component.html',
})
export class ChangeLanguageComponent implements OnInit {
  Languages; 

  constructor(private appService: AppService,
    private routerExtensions: RouterExtensions) {}

  ngOnInit(): void {
    this.Languages=this.appService.getLanguages();
  }
  onBack(Language:Language){
    this.appService.setSelectedLanguage(Language);
    this.routerExtensions.back();
  }

}
