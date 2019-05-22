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
    this.tv = {
      title: 'Game of Thrones',
      description: 'Various families fight for the Iron Throne',
      cast: 'Kit Harington, Emilia Clarke, Sophie Turner, Lena Headey, Peter Dinklage',
      image: ''

    }
  }

  ngOnInit() {
  }

}
