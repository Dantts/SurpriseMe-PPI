import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { map, Observable } from 'rxjs';
import { AnimesService } from 'src/app/services/animes.service';
import { AnimeProps } from 'src/app/shared/entities/anime.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() idEvent: EventEmitter<number> = new EventEmitter<number>();
  animeId?: number;
  animes$?: Observable<AnimeProps[]>;
  searchIcon = faSearch;

  constructor(
    private animesService: AnimesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const text = this.route.snapshot.queryParamMap.get('name');

    if (text) this.searchAnime(text);
  }

  searchAnime(text: string) {
    this.animes$ = this.animesService
      .getBySearch(text)
      .pipe(map((res) => res.data));
  }

  getIdfromModal(id: number) {
    this.animeId = id;
  }
  getIdfromListAnimes(id: string) {
    this.animeId = Number.parseInt(id);
  }
}
