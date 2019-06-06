import { Component, OnInit } from '@angular/core';
import { TvService } from '../tv/tv.service';
import { ITvCast } from '../itv-cast';

@Component({
  selector: 'app-tv-cast',
  templateUrl: './tv-cast.component.html',
  styleUrls: ['./tv-cast.component.css']
})
export class TvCastComponent implements OnInit {
  cast: ITvCast

  constructor(private tvService: TvService ) { 
    this.cast = {
      person: 'Colin Ford', 
      character: 'Joe McAlister',
      portrait: 'http://static.tvmaze.com/uploads/images/medium_portrait/0/7.jpg',
      url: 'http://www.tvmaze.com/characters/5/under-the-dome-joe-mcalister'
    }
  }

  ngOnInit() {
    this.tvService.getTvCast(82).subscribe(data => this.cast = data);
  }

}
