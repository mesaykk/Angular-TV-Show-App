import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-title-search',
  templateUrl: './title-search.component.html',
  styleUrls: ['./title-search.component.css']
})
export class TitleSearchComponent implements OnInit {
  search = new FormControl()

  constructor() { }

  ngOnInit() {
  }

}
