import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { getArtists } from '../api/artists-api';

@Component({
  selector: 'app-artist-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './artist-list.html',
  styleUrl: './artist-list.css'
})
export class ArtistListComponent implements OnInit {

  artists: any[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  async ngOnInit() {
    const data = await getArtists();
    this.artists = data;

    // 🔥 forza refresh UI
    this.cdr.detectChanges();
  }
}