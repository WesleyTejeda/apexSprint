import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getServerData().subscribe(data =>{
      console.log(data);
    })
  }
}
