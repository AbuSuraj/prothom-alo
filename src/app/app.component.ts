import { AfterViewChecked, Component, OnInit, SimpleChanges } from '@angular/core';
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
  isValue: string ='1';
  date = new Date();
  dateInString = JSON.stringify(this.date).slice(1,11);

  constructor(private newsService: NewsServiceService){}

 ngOnInit(): void {  
    this.newsService.getNews().subscribe(result => {
      this.news = result;
      console.log(result);
    })
  }
  
  headline(date:any){
    this.clickedDate = date;
    this.isValue = date;
  }

  getCurrentDayNews(date:boolean){
    const today = this.news[0].newsDate;
    if(today !==  this.dateInString){
      this.newsService.getTodaysNews(this.date).subscribe(result =>{
        console.log('todaysNews')
      })
    }
 
    this.newsService.getNews().subscribe(result => {
      this.news = result;
      console.log(result);
    })
  }
}