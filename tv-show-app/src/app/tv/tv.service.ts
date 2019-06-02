import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ITvShowApp } from '../i-tv-show-app';
import { map } from 'rxjs/operators';

interface ITvShowAppData {
  name: string,
  genres: string,
  status: string,
  officialSite: string,
  image: {
    original: string
  },
  summary: string,
  premiered: number,
  rating: {
    average: number
  },
  network: {
    country: {
      timezone: string
    }
    name: string
  },
  schedule: {
    time: number
  }
}


@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private httpClient: HttpClient) { }
getShowResult(name: string | number) {
  return this.httpClient.get<ITvShowAppData>(
    `${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${name}&appid=${environment.appId}`
  ).pipe(
    map(data => this.transformToITvShowApp(data))
  )
}
  private transformToITvShowApp(data: ITvShowAppData) : ITvShowApp{
   return {
    name: data.name,
    rating: data.rating.average,
    genres: data.genres,
    premiered: data.premiered,
    status: data.status,
    schedule: data.schedule.time, 
    timezone: data.network.country.timezone,
    network: data.network.name,
    officialSite: data.officialSite, 
    summary: data.summary, 
    image: data.image.original
   }
  }
}
