import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITvShowApp } from '../i-tv-show-app';
import { TvService } from '../tv/tv.service';


@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})
export class ShowResultComponent implements OnInit {

  @Input() tv: ITvShowApp
  @Output() castEvent = new EventEmitter();

  
  constructor() { 
}

  ngOnInit() {
    console.log(JSON.stringify(this.tv));
    //this.castEvent.emit(this.tv.id);//initiating cast call
    this.castEvent.emit(82);
  }

}
