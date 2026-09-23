import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

import { getAlbums, addAlbum, deleteAlbum } from '../api/albums-api';
import { getArtists } from '../api/artists-api';

@Component({
  selector: 'app-album-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './album-page.html',
  styleUrl: './album-page.css'
})

export class AlbumPageComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) {}

  albums: any[] = [];
  artists: any[] = [];

  newAlbum = {
    title: '',
    year_release: '',
    price: '',
    artist_id: ''
  };

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.albums = await getAlbums();
    this.artists = await getArtists();

    this.cdr.detectChanges();
  }

  async saveAlbum() {
    await addAlbum(this.newAlbum);
    this.newAlbum = {
      title: '',
      year_release: '',
      price: '',
      artist_id: ''
    };
    await this.loadData();
  }

  async removeAlbum(id:number) {
    await deleteAlbum(id);
    await this.loadData();
  }
}