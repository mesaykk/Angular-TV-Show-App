import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ITvShowApp } from '../i-tv-show-app';
import { TvService } from '../tv/tv.service';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-tv-episode',
  templateUrl: './tv-episode.component.html',
  styleUrls: ['./tv-episode.component.css']
})
export class TvEpisodeComponent implements OnInit {

  @Input() epi: ITvShowApp
  constructor() {
  }

  ngOnInit() {

  }

  getEpisodes() {
    let result = '';
    let epiUrlArr = this.epi.epiUrl.split(',');
    let epiNameArr = this.epi.epiName.split(',');
    let seasonArr = this.epi.season.split(',');
    let epiNumberArr = this.epi.epiNumber.split(',');
    let airdateArr = this.epi.airdate.split(',');
    let epiImageArr = this.epi.epiImage.split(',');
    
    let epiSummaryArr = this.epi.epiSummary.split('</p>')
    let epiSummaryForm =  '';

    for (let i = 0; i < airdateArr.length - 1; i++) {
      epiSummaryForm = epiSummaryArr[i].replace(",", "</p>");
      result += 
      `<th><img src='${epiImageArr[i]}'/></th>
      <th>${seasonArr[i]}</th>
      <th><a href="${epiUrlArr[i]}">${epiNumberArr[i]}</a></th>
      <th>${epiNameArr[i]}</th>
      <th>${airdateArr[i]}</th>
      <th><p id="summary">${epiSummaryForm}</p></th>`
    }
    return result;
  }

  getEpiImage() {
    let epiImageArr = this.epi.epiImage.split(',');
    return epiImageArr;

  }

}
