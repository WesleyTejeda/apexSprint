import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  playerName:string = "DonTheSheriff";
  platform:string = "PC";

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getUserData(this.playerName, this.platform).subscribe(data =>{
      console.log(data);
    })
  }
}
