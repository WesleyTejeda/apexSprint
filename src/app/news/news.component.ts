import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: any= [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getNewsData().subscribe(data =>{
      this.news = data;
      console.log(this.news);
    })
  }
}
