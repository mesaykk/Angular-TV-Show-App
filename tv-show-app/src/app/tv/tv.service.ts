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
  timezone:string,
  image: string,
  summary:string,
  premiered: number,
  network:  [
    country: {
      timezone: string,
    }
      ],
  schedule: {
      time: number
  }

}


@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private httpClient: HttpClient) { }
getShowResult(name: string) {
  return this.httpClient.get<ITvShowAppData>(
    `${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${name}&appid=${environment.appId}`
  ).pipe(
    map(data => this.transformToITvShowApp(data))
  )
}
  private transformToITvShowApp(data: ITvShowAppData) : ITvShowApp{
   return {
      name: data.name,
       rating: data.rating.avarage,
       genres: data.genres,
       premiered: data.premiered,
       status: data.status,
       schedule: data.schedule.time, 
       timezone: data.timezone,
       officialSite: data.officialSite, 
       summary: data.summary, 
       image:'http://static.tvmaze.com/uploads/images/original_untouched/190/476117.jpg'

}
  }
}
