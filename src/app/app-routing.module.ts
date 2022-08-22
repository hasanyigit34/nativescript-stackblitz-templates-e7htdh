import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { LoginComponent } from './login/login.component'
import { ItemsComponent } from './change-language/items.component'
import { ChangeLanguageComponent } from './change-language/change-language.component'
import { Step1Component } from './onboarding/step1'
import { Step2Component } from './onboarding/step2'
import { Step4Component } from './onboarding/step4'
import { Step3Component } from './onboarding/step3'

const routes: Routes = [
  { path: '', redirectTo: '/onboarding/step1', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'change-language', component: ChangeLanguageComponent },
  { path: 'onboarding/step1', component: Step1Component },
  { path: 'onboarding/step2', component: Step2Component },
  { path: 'onboarding/step3', component: Step3Component },
  { path: 'onboarding/step4', component: Step4Component },
 
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
