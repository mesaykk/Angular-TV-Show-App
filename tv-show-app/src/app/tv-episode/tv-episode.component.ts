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
    let epiSummaryArr = this.epi.epiSummary.split(',');

    for (let i = 0; i < airdateArr.length - 1; i++) {
      result += 
      `<th><img src='${epiImageArr[i]}'/></th>
      <th>${seasonArr[i]}</th>
      <th><a href="${epiUrlArr[i]}">${epiNumberArr[i]}</a></th>
      <th>${epiNameArr[i]}</th>
      <th>${airdateArr[i]}</th>
      <th><p id="summary">${epiSummaryArr[i]}</p></th>`
    }
    return result;
  }

  getEpiImage() {
    let epiImageArr = this.epi.epiImage.split(',');
    return epiImageArr;

  }

}

// <table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z8">

//   <!-- Position Column -->
//   <ng-container matColumnDef="position">
//     <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>
//     <td mat-cell *matCellDef="let element"> {{element.position}} </td>
//   </ng-container>

//   <!-- Name Column -->
//   <ng-container matColumnDef="name">
//     <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>
//     <td mat-cell *matCellDef="let element"> {{element.name}} </td>
//   </ng-container>

//   <!-- Weight Column -->
//   <ng-container matColumnDef="weight">
//     <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>
//     <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
//   </ng-container>

//   <!-- Symbol Column -->
//   <ng-container matColumnDef="symbol">
//     <th mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </th>
//     <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>
//   </ng-container>

//   <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
//   <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
// </table>
