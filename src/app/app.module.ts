import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ItemsComponent } from './change-language/items.component'
import { ChangeLanguageComponent } from './change-language/change-language.component'
import { LoginComponent } from './login/login.component'
import { Step1Component } from './onboarding/step1';
import { Step2Component } from './onboarding/step2';
import { Step3Component } from './onboarding/step3';
import { Step4Component } from './onboarding/step4';

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [AppComponent,LoginComponent, ItemsComponent, ChangeLanguageComponent,
  Step1Component,
  Step2Component,
  Step3Component,
  Step4Component],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
