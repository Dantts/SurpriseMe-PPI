import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { map, Observable } from 'rxjs';
import { AnimesService } from 'src/app/services/animes.service';
import { AnimeProps } from 'src/app/shared/entities/anime.model';

@Component({
  selector: 'app-list-animes-categories',
  templateUrl: './list-animes-categories.component.html',
  styleUrls: ['./list-animes-categories.component.scss'],
})
export class ListAnimesCategoriesComponent implements OnInit {
  @Input() title: string = '';
  @Input() idCategory?: number;
  @Output() idEvent: EventEmitter<number> = new EventEmitter<number>();
  angleRightIcon = faAngleRight;
  angleLeftIcon = faAngleLeft;
  scrollX = 0;
  animes$?: Observable<AnimeProps[]>;

  constructor(private animeService: AnimesService) {}

  ngOnInit(): void {
    if (this.idCategory) {
      this.animes$ = this.animeService
        .getByCategory(this.idCategory)
        .pipe(map((res) => res.data));
    }
  }

  viewMoreInformation(id: string) {
    this.idEvent.emit(Number.parseInt(id));
  }

  onHandleLeft() {
    const setScroll = this.scrollX + Math.round(window.innerWidth / 2);
    if (setScroll > 0) {
      this.scrollX = 0;
    } else {
      this.scrollX = setScroll;
    }
  }

  onHandleRight(listLength: number) {
    const setScroll = this.scrollX - Math.round(window.innerWidth / 2);
    const maxWidth = listLength * 220;

    if (window.innerWidth - maxWidth > setScroll) {
      this.scrollX = window.innerWidth - maxWidth - 30;
    } else {
      this.scrollX = setScroll;
    }
  }
}
