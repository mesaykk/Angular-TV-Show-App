import { Component } from '@angular/core';
import { ITvShowApp } from './i-tv-show-app';
import { TvService } from './tv/tv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-show-app';
  showResult: ITvShowApp
  constructor(private tvService: TvService) {
  }
  doSearch(searchValue){
    if(searchValue) {
      const userInput = searchValue.split(',').map(s => s.trim());
      this.tvService.getShowResult 
      (userInput[0]).subscribe(data => this.showResult = data)
    }
  }
}