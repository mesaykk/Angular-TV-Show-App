import { Component, OnInit, Input } from '@angular/core';
import { ITvShowApp } from '../i-tv-show-app';

@Component({
  selector: 'app-tv-cast',
  templateUrl: './tv-cast.component.html',
  styleUrls: ['./tv-cast.component.css']
})
export class TvCastComponent implements OnInit {
  @Input() cast: ITvShowApp // auto import
    
  constructor() { 
    // dummy data
    // this.cast = {
    //   person: 'Colin Ford', 
    //   character: 'Joe McAlister',
    //   portrait: 'http://static.tvmaze.com/uploads/images/medium_portrait/0/7.jpg',
    //   url: 'http://www.tvmaze.com/characters/5/under-the-dome-joe-mcalister'
    // }
  }

  ngOnInit() {

  }

  getCast() {
    let result = '';
    let portraitArr = JSON.parse(this.cast.portrait);
    let personArr = JSON.parse(this.cast.person);
    let urlArr = JSON.parse(this.cast.url);
    let characterArr = JSON.parse(this.cast.character);
    for (let i = 0; i < personArr.length - 1; i++) {
      result += 
      `<div class="grid-item"><span><img id='portrait' src='${portraitArr[i]}'/></span>
      <div id="name"><span>${personArr[i]}</span> 
      as <a href="${urlArr[i]}">${characterArr[i]}</a></span></div></div>`
    }
    return result;
  }
}
