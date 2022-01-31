import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  animeId?: number;
  scroll: boolean = false;

  listAnimeCategory = [
    {
      title: 'Action',
      id: 150,
    },
    {
      title: 'Romance',
      id: 164,
    },
    {
      title: 'Adventure',
      id: 157,
    },
    {
      title: 'Slice of Life',
      id: 169,
    },
    {
      title: 'Fantasy World',
      id: 52,
    },
    {
      title: 'Pirate',
      id: 11,
    },
    {
      title: 'Super Power',
      id: 47,
    },

    {
      title: 'Comedy',
      id: 160,
    },
    {
      title: 'Demon',
      id: 67,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  scrollDetector(event: any) {
    if (event.path[1].pageYOffset > 5) {
      this.scroll = true;
    } else {
      this.scroll = false;
    }
  }

  getIdfromListAnimes(id: number) {
    this.animeId = id;
  }
}
