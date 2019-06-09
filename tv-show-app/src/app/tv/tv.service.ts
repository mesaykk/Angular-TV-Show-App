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

        // Get all elements.

    let myCastArr = data._embedded.cast;
    let people = [];
    let characters = [];
    let portraits = [];
    let urls = [];
    for (let i = 0; i < myCastArr.length - 1; i++) {
      people.push(myCastArr[i].person.name);
      characters.push(myCastArr[i].character.name);
      portraits.push(myCastArr[i].character.image.medium);
      urls.push(myCastArr[i].character.url);
    }

    let peopleStr = people.join(',');
    let charactersStr = characters.join(',');
    let portraitsStr = portraits.join(',');
    let urlsStr = urls.join(',');

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
    image: data.image.original,  
    person: peopleStr,
    character: charactersStr,
    portrait: portraitsStr,
    url: urlsStr
   }
  }
}
