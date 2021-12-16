import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  maps:any[] = [];
  mapsData: any = {};

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getMapData().subscribe((data:any) =>{
      console.log(data);
      this.mapsData = data;
      for (let map in this.mapsData){
        console.log(map)
        this.maps.push({type: map, info: this.mapsData[map]});
      }
      console.log(this.maps)
    })
  }

}
