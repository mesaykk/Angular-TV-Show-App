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
      timezone: StringConstructor
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
    ],
    episodes: [
      {
        url: string,
        name: string,
        season: string,
        number: string,
        airdate: string,
        image: {
          medium: string
        },
        summary: string
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

    // Get all elements from the <cast>.
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

    // Change array to string.
    let peopleStr = people.join(',');
    let charactersStr = characters.join(',');
    let portraitsStr = portraits.join(',');
    let urlsStr = urls.join(',');

    // Get all elements from the <episodes>
    let myEpiArr = data._embedded.episodes;
    let epiUrls = [];
    let epiNames = [];
    let seasons = [];
    let epiNumbers = [];
    let airdates = [];
    let epiImages = [];
    let epiSummaries = [];
    for (let i = 0; i < myEpiArr.length - 1; i++) {
      epiUrls.push(myEpiArr[i].url);
      epiNames.push(myEpiArr[i].name);
      seasons.push(myEpiArr[i].season);
      epiNumbers.push(myEpiArr[i].number);
      airdates.push(myEpiArr[i].airdate);
      epiImages.push(myEpiArr[i].image.medium);
      epiSummaries.push(myEpiArr[i].summary);
    }
    console.log('episode name? ' + epiUrls[0])

    // Change array to string.
    let epiUrlsStr = epiUrls.join(',');
    let epiNamesStr = epiNames.join(',');
    let seasonsStr = seasons.join(',');
    let epiNumbersStr = epiNumbers.join(',');
    let airdatesStr = airdates.join(',');
    let epiImagesStr = epiImages.join(',');
    let epiSummariesStr = epiSummaries.join(',');

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
    url: urlsStr,
    
    epiUrl: epiUrlsStr,
    epiName: epiNamesStr,
    season: seasonsStr,
    epiNumber: epiNumbersStr,
    airdate: airdatesStr,
    epiImage: epiImagesStr,
    epiSummary: epiSummariesStr

    // epiUrl: data._embedded.episodes[0].url,
    // epiName: data._embedded.episodes[0].name,
    // season: data._embedded.episodes[0].season,
    // epiNumber: data._embedded.episodes[0].number,
    // airdate: data._embedded.episodes[0].airdate,
    // epiImage: data._embedded.episodes[0].image.medium,
    // epiSummary: data._embedded.episodes[0].summary,
   }
  }
}
