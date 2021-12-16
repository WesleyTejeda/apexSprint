import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getMapData().subscribe(data =>{
      console.log(data);
    })
  }

}
