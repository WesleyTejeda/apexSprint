import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  isReady: boolean = false;
  playerName:string = "";
  platform:string = "PC";
  playerData:any = {};
  levelPercent:string = "0";
  levelStyle:any = {
    background: "none",
    border: "1px solid black"
  }
  legends:any = []
  isOnline:boolean = false;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    

    
  }
  getData(){
    this.httpService.getUserData(this.playerName, this.platform).subscribe((data:any) =>{
      console.log(data);
      let legendBank = data.legends.all;
      console.log(legendBank)
      for (let legendData in legendBank) {
        this.legends.push({name: legendData, ImgAssets: legendBank[legendData]["ImgAssets"]});
      }
      console.log(this.legends)
      this.playerData = data;
      this.isReady = true;
      this.levelPercent = data.global.toNextLevelPercent;
      console.log(this.levelPercent);
      this.levelStyle.background = `-webkit-linear-gradient(left, #E72727 ${this.levelPercent}%,#ffffff ${this.levelPercent}%)`;
      this.isOnline = data.global.realtime.isOnline;
    })
  }
}
