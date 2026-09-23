import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ArtistListComponent } from './artist-list/artist-list';
import { AlbumPageComponent } from './album-page/album-page';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'artists', component: ArtistListComponent },
  { path: 'albums', component: AlbumPageComponent }
];