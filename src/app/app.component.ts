import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from './news-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  news: any;
  title = 'prothom-alo';
  clickedDate: any;
  constructor(private newsService: NewsServiceService){}
  ngOnInit(): void { 
    // this.news
    this.newsService.news().subscribe(result => {
      this.news = result;
      console.log(result);
    })
  }
  headline(date:any){
    this.clickedDate = date;
  }
}
