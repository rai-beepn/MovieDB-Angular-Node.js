
export interface Movie {
    title: string;
    id: number;
    release_date: string;
    vote_average: number;
    overview: string;
    poster_path: string;

    // constructor() { this.fullposter_path = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + this.poster_path; }
}
