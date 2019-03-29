import { Component, OnInit } from '@angular/core';

import { Movie } from '../Shared/Movie';
import { GetMovieService } from '../getmovie.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Location } from '@angular/common';



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  private movie: Movie;
  private movies: Movie[];

  constructor(private movieService: GetMovieService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.movieService.getMovie(this.route.snapshot.params['title']).subscribe(movie => {
      this.movie = movie;
      // this.movie.fullposter_path = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + this.movie.poster_path;
    });

    // this.movie.fullposter_path = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + this.movie.poster_path;
    // this.movieService.getMovie(this.route.snapshot.params['title']).subscribe(response => this.movie = response[0]);
    // this.movie = this.movies[0];
  }
  public gotoMovies() {
    // this.router.navigate(['/movie-list/' + this.route.snapshot.params['title']]);
    this.location.back();
  }

}

