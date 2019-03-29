

import { Injectable, OnInit } from '@angular/core';


import { Movie } from './Shared/Movie';

import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/mergeMap';

interface IMovieData { results: Movie[]; }



@Injectable()
export class GetMovieService {

  constructor(private httpc: HttpClient, private http: Http) { }

  public getMovies(): Observable<Movie[]> {
    return this.http.get('http://api.themoviedb.org/3/movie/popular?api_key=e7990444d96dae7ef10b8ce4477f8388&language=en-US&page=1')
      .map(response => {
        const data: IMovieData = response.json();
        return data.results.map(movie => {
          return <Movie>{
            'id': movie.id,
            'title': movie.title,
            'poster_path': 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path,
            'overview': movie.overview,
            'release_date': movie.release_date,
            'vote_average': movie.vote_average
          };
        });
      });
  }
  public getTopMovies(): Observable<Movie[]> {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=e7990444d96dae7ef10b8ce4477f8388&language=en-US&page=1')
      .map(response => {
        const data: IMovieData = response.json();
        return data.results.map(movie => {
          return <Movie>{
            'id': movie.id,
            'title': movie.title,
            'poster_path': 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path,
            'overview': movie.overview,
            'release_date': movie.release_date,
            'vote_average': movie.vote_average
          };
        });
      });
  }
  public getUpcomingMovies(): Observable<Movie[]> {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=e7990444d96dae7ef10b8ce4477f8388&language=en-US&page=1')
      .map(response => {
        const data: IMovieData = response.json();
        return data.results.map(movie => {
          return <Movie>{
            'id': movie.id,
            'title': movie.title,
            'poster_path': 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path,
            'overview': movie.overview,
            'release_date': movie.release_date,
            'vote_average': movie.vote_average
          };
        });
      });
  }

  public getPlayingMovies(): Observable<Movie[]> {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=e7990444d96dae7ef10b8ce4477f8388&language=en-US&page=1')
      .map(response => {
        const data: IMovieData = response.json();
        return data.results.map(movie => {
          return <Movie>{
            'id': movie.id,
            'title': movie.title,
            'poster_path': 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path,
            'overview': movie.overview,
            'release_date': movie.release_date,
            'vote_average': movie.vote_average
          };
        });
      });
  }
  public getMovie(id: string): Observable<Movie> {
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=e7990444d96dae7ef10b8ce4477f8388&language=en-US')
      .map(response => {
        const movie: Movie = response.json();

        return <Movie>{
          'id': movie.id,
          'title': movie.title,
          'poster_path': 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path,
          'overview': movie.overview,
          'release_date': movie.release_date,
          'vote_average': movie.vote_average
        };
      });
    // console.log(this.selected);
    // console.log(2);

    // return this.selected;
  }

  // public getMovieList(): Movie[] {
  //   return this.movies;
  // }
  // public getMovie(title: string): Movie {
  //   this.foundMovie = this.movies.find(movie => movie.title === title);
  //   this.foundMovie.fullposter_path = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + this.foundMovie.poster_path;
  //   return this.foundMovie;
  // }
}
