import { Component, OnInit } from '@angular/core';
import { ITvShowApp } from '../i-tv-show-app';
import { TvService } from '../tv/tv.service';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})
export class ShowResultComponent implements OnInit {

  tv: ITvShowApp
  constructor(private tvService:TvService) { 
    // update dummy data based on http://api.tvmaze.com/shows/82
   
  }

  ngOnInit() {
    this.tvService.getShowResult('Game of Thrones')
    .subscribe(data => this.tv = data);
  }

}
