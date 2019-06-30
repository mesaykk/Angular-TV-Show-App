import { ITvService } from './tv.service';
import { ITvShowApp } from '../i-tv-show-app';
import { of } from 'rxjs';

export class TvServiceFake implements ITvService {
  private fakeTv: ITvShowApp = {
    id: 123,
    name: "Lost",
    rating: 8.4,
    genres: "Drama,Fantasy,Horror",
    premiered: "2010-09-12",
    status: "Ended",
    schedule: "22:00",
    timezone: "America/Halifax",
    officialSite: "http://abc.go.com/shows/lost",
    network: "ABC",
    summary: "<p>Out of the blackness, the first thing Jack senses is pain. Then burning sun. A Bamboo forest. Smoke. Screams. With a rush comes the horrible awareness that the plane he was on tore apart in mid-air and crashed on a Pacific island. From there it's a blur, as his doctor's instinct kicks in: people need his help.</p><p>Stripped of everything, the 48 survivors scavenge what they can from the plane for their survival. Some panic. Some pin their hopes on rescue. A few find inner strength they never knew they had -- like Kate, who, with no medical training, suddenly finds herself suturing the doctor's wounds. Hurley - a man with a warm sense of humor despite the desperate situation - does his best to keep his cool as he helps those around him to survive. Charlie is a faded rock star who harbors a painful secret. Sayid is a Middle Eastern man who must wrestle with the racial profiling directed at him by some of his fellow survivors. Jin and Sun are a Korean couple whose traditions, values and language are foreign, and thus causes much to get lost in the translation. Sawyer has an air of danger surrounding him, and his intense sense of mistrust for everyone around him could prove to be fatal to his fellow castaways. Michael has just gained custody of his nine-year-old son, Walt, after the death of his ex-wife - they are a father and son who don't even know each other. Locke is a mysterious man who keeps to himself, and who harbors a deeper connection to the island than any of the others. Self-centered Shannon - who actually gives herself a pedicure amid the chaos - and her estranged controlling brother, Boone , constantly bicker and must learn to get along if they are to survive. And young Claire is eight months pregnant and ill-prepared for the hardships of motherhood - especially on a deserted island.</p>",
    image: "http://static.tvmaze.com/uploads/images/original_untouched/0/1389.jpg",
    // cast
    person: "Matthew Fox" ,
    character: "Dr. Jack Shephard",
    portrait: "http://static.tvmaze.com/uploads/images/medium_portrait/0/1390.jpg",
    url: "https://www.tvmaze.com/characters/34808/lost-dr-jack-shephard",
    // episode
    epiUrl: "https://www.tvmaze.com/episodes/10140/lost-1x01-pilot-1",
    epiName: "Pilot (1)",
    season: "1",
    epiNumber: "1",
    airdate: "2004-09-22",
    epiImage: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168634.jpg",
    epiSummary: "Out of the blackness, the first thing Jack senses is pain. Then burning sun. A Bamboo forest. Smoke. Screams. With a rush comes the horrible awareness that the plane he was on tore apart in mid-air and crashed on a Pacific island. From there it's a blur, as his doctor's instinct kicks in: people need his help."
  }

  public getShowResult(name: string | number) {
    return of(this.fakeTv)
  }
}


