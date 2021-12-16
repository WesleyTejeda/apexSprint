import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiKey: string = 'ndAa5ZfoOaEvLCeYq8sF'
  rootURL: string = 'https://api.mozambiquehe.re'
  mapsURL: string = `/maprotation?version=2&auth=${this.apiKey}`
  profilesURL: string = `/bridge?version=5&`
  rankedURL: string = `/news?lang=en-us&auth=${this.apiKey}`
  serversURL: string = `/servers?auth=${this.apiKey}`

  constructor(private httpClient: HttpClient) { }

  //Define http methods down here
  getMapData(){
    return this.httpClient.get(this.rootURL+this.mapsURL);
  }
  
  getUserData(playerName:string, platform:String){
    return this.httpClient.get(this.rootURL+this.profilesURL+`platform=${platform}&player=${playerName}&auth=${this.apiKey}`);
  }

  getServerData(){
    return this.httpClient.get(this.rootURL+this.serversURL);
  }

  getNewsData(){
    return this.httpClient.get(this.rootURL+this.rankedURL);
  }
}
