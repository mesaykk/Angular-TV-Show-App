import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ITvShowApp } from '../i-tv-show-app';
import { TvService } from '../tv/tv.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import {MatTableModule} from '@angular/material/table';

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
      `<table mat-table><tr><td><img src='${epiImageArr[i]}'/></td>
      <td>${seasonArr[i]}</td>
      <td><a href="${epiUrlArr[i]}">${epiNumberArr[i]}</a></td>
      <td>${epiNameArr[i]}</td>
      <td>${airdateArr[i]}</td>
      <td><p id="summary">${epiSummaryForm}</p></td></tr></table>`
    }
    return result;
  }

  getEpiImage() {
    let epiImageArr = this.epi.epiImage.split(',');
    return epiImageArr;

  }

}
