import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ITvShowApp } from '../i-tv-show-app';
import { map } from 'rxjs/operators';
import { ITvCast } from '../itv-cast';

interface ITvShowAppData {
  id: number,
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
interface ITvCastData {
  _embedded: {
    cast: {
      person: {
        name: string
      },
      character: {
        name: string
        image: {
          medium: string
        }
        url: string
      }
    }
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
      // `${environment.baseUrl}api.tvmaze.com/shows/${id}?embed=cast&appid=${environment.appId}`
    ).pipe(
      map(data => this.transformToITvShowApp(data))
    )
  }

  private transformToITvShowApp(data: ITvShowAppData) : ITvShowApp{
   return {
    id: data.id,
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

   // http://api.tvmaze.com/shows/82?embed=cast&appid=fbSx8kAxuvn7CNZoUWB3lZo_3_5lsOq2

  getTvCast(id: number) {
    return this.httpClient.get<ITvCastData>(
      `${environment.baseUrl}api.tvmaze.com/shows/${id}?embed=cast&appid=${environment.appId}`
      ).pipe(map(data => this.transformtoITvCast(data)))
  }

  private transformtoITvCast(data: ITvCastData) : ITvCast {
    return {
      person: data._embedded.cast.person.name,
      character: data._embedded.cast.character.name,
      portrait: data._embedded.cast.character.image.medium,
      url: data._embedded.cast.character.url
    }
  }
}
