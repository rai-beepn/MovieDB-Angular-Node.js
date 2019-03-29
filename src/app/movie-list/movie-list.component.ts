import { Component, OnInit } from '@angular/core';
import { Movie } from '../Shared/Movie';
import { GetMovieService } from '../getmovie.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { fail } from 'assert';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  private alink: string;

  private movies: Movie[];
  constructor(private movieService: GetMovieService,
    private http: HttpClient,
    private router: Router, private route: ActivatedRoute) {

    // this.movies = movieService.getMovieList();

    // this.movies = movieservice.getMovies();
    // console.log(this.movies);

    // this.http.get('http://api.themoviedb.org/3/movie/popular?api_key=e7990444d96dae7ef10b8ce4477f8388&language=en-US&page=1')
    //   .subscribe(data => {
    //     this.movies = data['results'];
    //   });



  }

  ngOnInit() {

    switch (this.route.snapshot.params['id']) {
      case 'popular':
        this.popularMovies();
        break;
      case 'top':
        this.topMovies();
        break;
      case 'upcoming':
        this.upcomingMovies();
        break;
      case 'playing':
        this.playingMovies();
        break;
      default:
        this.popularMovies();
        break;
    }

    // this.movies = await this.movieService.getMovies();
    // console.log(this.movies);

    // this.http.get('http://api.themoviedb.org/3/movie/popular?api_key=e7990444d96dae7ef10b8ce4477f8388&language=en-US&page=1')
    //   .subscribe(data => {
    //     this.movies = data['results'];
    //   });
  }

  onSelect(amovie: Movie) {
    this.router.navigate(['/movie-details', amovie.id]);
  }

  topMovies() {
    this.movieService.getTopMovies().subscribe(data => {
      this.movies = data;
    });
    this.router.navigate(['/movie-list', 'top']);

  }
  popularMovies() {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data;
    });
    this.router.navigate(['/movie-list', 'popular']);
  }
  upcomingMovies() {
    this.movieService.getUpcomingMovies().subscribe(data => {
      this.movies = data;
    });
    this.router.navigate(['/movie-list', 'upcoming']);
  }
  playingMovies() {
    this.movieService.getPlayingMovies().subscribe(data => {
      this.movies = data;
    });
    this.router.navigate(['/movie-list', 'playing']);
  }

}

