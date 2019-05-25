import { Component, OnInit } from '@angular/core';
import { ITvShowApp } from '../i-tv-show-app';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})
export class ShowResultComponent implements OnInit {

  tv: ITvShowApp
  constructor() { 
    // update dummy data based on http://api.tvmaze.com/shows/82
    this.tv = {
      name: "Game of Thrones",
      rating: 9.2,
      genres: "Drama, Adventure, Fantasy",
      premiered: '2011-04-17',
      status: "Ended",
      schedule: "21:00",
      timezone: "America/New_York",
      officialSite: "http://www.hbo.com/game-of-thrones",
      summary: "Based on the bestselling book series A Song of Ice and Fire by George R.R. Martin, this sprawling new HBO drama is set in a world where summers span decades and winters can last a lifetime. From the scheming south and the savage eastern lands, to the frozen north and ancient Wall that protects the realm from the mysterious darkness beyond, the powerful families of the Seven Kingdoms are locked in a battle for the Iron Throne. This is a story of duplicity and treachery, nobility and honor, conquest and triumph. In the Game of Thrones, you either win or you die.",
      image: "http://static.tvmaze.com/uploads/images/original_untouched/190/476117.jpg"
    }
  }

  ngOnInit() {
  }

}
