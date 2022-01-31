import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable, take, tap } from 'rxjs';
import { AnimesService } from 'src/app/services/animes.service';
import { CategoryProps } from 'src/app/shared/entities/category.model';

@Component({
  selector: 'app-surprise-me',
  templateUrl: './surprise-me.component.html',
  styleUrls: ['./surprise-me.component.scss'],
})
export class SurpriseMeComponent implements OnInit {
  anime: any = undefined;
  categories$?: Observable<CategoryProps[]>;

  constructor(private animesService: AnimesService, private http: HttpClient) {}

  ngOnInit(): void {}

  generateRandomAnime() {
    this.animesService.getRandomAnime().subscribe((anime) => {
      if (anime.data.length > 0) {
        this.anime = anime.data[Math.round(Math.random() * anime.data.length)];
        this.categories$ = this.http
          .get<any>(this.anime.relationships.categories.links.related)
          .pipe(
            take(1),
            tap(console.log),
            map((categories) => categories.data)
          );
      } else {
        this.animesService
          .getAnimeById(Math.round(Math.random() * 100))
          .pipe(
            tap((res) => {
              this.categories$ = this.http
                .get<any>(res.data.relationships.categories.links.related)
                .pipe(
                  take(1),
                  tap(console.log),
                  map((categories) => categories.data)
                );
            })
          )
          .subscribe((anime) => (this.anime = anime.data));
      }
    });
  }
}
