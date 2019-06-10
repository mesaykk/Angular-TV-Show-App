export interface ITvShowApp {
    id: number
    name: string
    rating: number
    genres: string
    premiered: string
    status: string
    schedule: string
    timezone: string
    officialSite: string
    network: string
    summary: string
    image: string
    // cast
    person: string 
    character: string
    portrait: string
    url: string
    // episode
    epiUrl: string
    epiName: string
    season: string
    epiNumber: string
    airdate: string
    epiImage: string
    epiSummary: string
}