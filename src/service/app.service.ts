import { Injectable } from '@angular/core'
import { ApplicationSettings } from '@nativescript/core';
export interface Language{

} 

@Injectable({
  providedIn: 'root',
})
export class AppService {
  language:Language;
  languages:Array<Language>=[
    {Name:"Türkçe",Value:"1", Image:"icon-turkey-flag.png"},
    {Name:"Deutsch",Value:"2",Image:"icon-german-flag.png"},
    {Name:"English",Value:"3" ,Image:"icon-england-flag.png"}
  ];
 
  constructor() {
   let selectedLanguage= ApplicationSettings.getString("SelectedLanguage");
   if(selectedLanguage!=null && selectedLanguage!=""){
    this.language=JSON.parse(selectedLanguage);
   }else{
    this.language=this.languages[2];
   } 
  }
  
  getLanguages(){
    return this.languages;
  }

  getLanguage(){
   return this.language;
  }

  setSelectedLanguage(language:Language){
    this.language=language;
    ApplicationSettings.setString("SelectedLanguage",JSON.stringify(language));
  }

}
