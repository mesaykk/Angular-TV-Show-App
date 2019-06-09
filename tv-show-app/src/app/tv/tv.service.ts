import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ITvShowApp } from '../i-tv-show-app';
import { map } from 'rxjs/operators';

interface ITvShowAppData {
  id: number,
  name: string,
  rating: {
    average: number
  },
  genres: string,
  premiered: string,
  status: string,
  schedule: {
    time: string
  },
  network: {
    country: {
      timezone: string
    }
    name: string
  },
  officialSite: string,
  summary: string,
  image: {
    original: string
  },
  _embedded: {
    cast: [
      {
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
    ]
  }
}

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private httpClient: HttpClient) { }

  getShowResult(name: string | number) {
    let uriParams = ''
    if (typeof name === 'string') {
      if (name.includes(' ')) {
        name = name.replace(/\s/g, '%20')
      }
      uriParams = `q=${name}`
    }       
    return this.httpClient.get<ITvShowAppData>(
      `${environment.baseUrl}api.tvmaze.com/singlesearch/shows?${uriParams}&embed[]=episodes&embed[]=cast&appid=${environment.appId}`
    ).pipe(
      map(data => this.transformToITvShowApp(data))
    )
  }

  private transformToITvShowApp(data: ITvShowAppData) : ITvShowApp{
   return {
    id: data.id,
    name: data.name,
    rating: data.rating.average,
    genres: data.genres, // all elements from one array.
    premiered: data.premiered,
    status: data.status,
    schedule: data.schedule.time,
    timezone: data.network.country.timezone,
    network: data.network.name,
    officialSite: data.officialSite,
    summary: data.summary,
    image: data.image.original,  
    person: data._embedded.cast[0].person.name,
    character: data._embedded.cast[0].character.name,
    portrait: data._embedded.cast[0].character.image.medium,
    url: data._embedded.cast[0].character.url 
   }
  }
}
