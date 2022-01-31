import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { map, Observable, take, tap } from 'rxjs';
import { AnimesService } from 'src/app/services/animes.service';
import { AnimeProps } from 'src/app/shared/entities/anime.model';
import { CategoryDataProps, CategoryProps } from 'src/app/shared/entities/category.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() animeId?: number;
  @Output() closeModal: EventEmitter<number> = new EventEmitter<number>();
  animes$?: Observable<AnimeProps>;
  categories$?: Observable<CategoryProps[]>;

  constructor(private animesService: AnimesService, private http: HttpClient) {}

  ngOnInit(): void {
    if (this.animeId === undefined || this.animeId === 0) {
      this.closeModalFunction();
    } else {
      this.animes$ = this.animesService.getAnimeById(this.animeId).pipe(
        tap((anime) => {
          this.categories$ = this.http
            .get<CategoryDataProps>(
              anime.data.relationships.categories.links.related
            )
            .pipe(
              take(1),
              map((categories) => categories.data)
            );
        }),
        map((res) => res.data)
      );
    }
  }

  closeModalFunction() {
    this.closeModal.emit(0);
  }
}
