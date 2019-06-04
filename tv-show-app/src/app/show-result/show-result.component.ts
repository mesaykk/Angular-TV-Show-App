import { Component, OnInit, Input } from '@angular/core';
import { ITvShowApp } from '../i-tv-show-app';
import { TvService } from '../tv/tv.service';


@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})
export class ShowResultComponent implements OnInit {

  @Input() tv: ITvShowApp

  
  constructor() { 
}

  ngOnInit() {
 
  }

}
