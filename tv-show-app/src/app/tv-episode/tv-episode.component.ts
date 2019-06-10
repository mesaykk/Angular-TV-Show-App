import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ITvShowApp } from '../i-tv-show-app';
import { TvService } from '../tv/tv.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';

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
    // let epiUrlArr = this.epi.epiUrl.split(',');
    // let epiNameArr = this.epi.epiName.split(',');
    // let seasonArr = this.epi.season.split(',');
    // let epiNumberArr = this.epi.epiNumber.split(',');
    // let airdateArr = this.epi.airdate.split(',');
    // let epiImageArr = this.epi.epiImage.split(',');
    let epiUrlArr = JSON.parse(this.epi.epiUrl);
    let epiNameArr = JSON.parse(this.epi.epiName);
    let seasonArr = JSON.parse(this.epi.season);
    let epiNumberArr = JSON.parse(this.epi.epiNumber);
    let airdateArr = JSON.parse(this.epi.airdate);
    let epiImageArr = JSON.parse(this.epi.epiImage);
    let epiSummaryArr = JSON.parse(this.epi.epiSummary)

    let epiSummaryForm =  '';
    let tableTitle = `<tr>
                        <th>Image</th>
                        <th>Season</th>
                        <th>Episode</th>
                        <th>Episode Name</th>
                        <th>Air Date</th>
                        <th>Summary</th>
                      </tr>`
              

    for (let i = 0; i < airdateArr.length - 1; i++) {
      result += 
      `<tr><td><img src='${epiImageArr[i]}'/></td>
      <td>${seasonArr[i]}</td>
      <td><a href="${epiUrlArr[i]}">${epiNumberArr[i]}</a></td>
      <td>${epiNameArr[i]}</td>
      <td class="column5">${airdateArr[i]}</td>
      <td>${epiSummaryArr[i]}</td></tr>`
    }
    return tableTitle + result;
  }

}
