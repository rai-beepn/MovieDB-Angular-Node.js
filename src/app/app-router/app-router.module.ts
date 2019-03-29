import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent} from '../movie-list/movie-list.component';
import { MovieDetailsComponent} from '../movie-details/movie-details.component';

const appRoutes: Routes = [
  {path: 'movie-list/:id', component: MovieListComponent},
  {path: 'movie-details/:title', component: MovieDetailsComponent},
  { path: '', redirectTo: '/movie-list', pathMatch: 'full' },
  { path: '**', component: MovieListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
export const routingComponents = [MovieDetailsComponent,MovieListComponent]
