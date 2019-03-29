import { TestBed, inject } from '@angular/core/testing';

import { GetMovieService } from './getmovie.service';

describe('GetmovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetMovieService]
    });
  });

  it('should be created', inject([GetMovieService], (service: GetMovieService) => {
    expect(service).toBeTruthy();
  }));
});
