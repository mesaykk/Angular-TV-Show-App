import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  home: {};

  constructor() { 
    this.home = { 
      name1: "Game of Thrones",
      officialSite1: "http://www.hbo.com/game-of-thrones",
      image1: "http://static.tvmaze.com/uploads/images/medium_portrait/190/476117.jpg",
      name2: "Stranger things",
      officialSite2: "https://www.netflix.com/title/80057281",
      image2: "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
    }
  }

  ngOnInit() {
  }

}
