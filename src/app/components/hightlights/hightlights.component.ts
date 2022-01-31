import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AnimesService } from 'src/app/services/animes.service';

@Component({
  selector: 'app-hightlights',
  templateUrl: './hightlights.component.html',
  styleUrls: ['./hightlights.component.scss'],
})
export class HightlightsComponent implements OnInit {
  @Output() idEvent: EventEmitter<number> = new EventEmitter<number>();
  anime: any = undefined;

  constructor(private animesService: AnimesService) {}

  ngOnInit(): void {
    this.animesService.getRandomAnime().subscribe((anime) => {
      if (anime.data.length > 0) {
        this.anime = anime.data[Math.round(Math.random() * anime.data.length)];
      } else {
        this.animesService
          .getAnimeById(Math.round(Math.random() * 100))
          .subscribe((anime) => (this.anime = anime.data));
      }
    });
  }

  viewMoreInformation(id: number) {
    this.idEvent.emit(id);
  }
}
