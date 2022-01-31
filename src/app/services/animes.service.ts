import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

import { DataOneProps, DataProps } from '../shared/entities/anime.model';

@Injectable({
  providedIn: 'root',
})
export class AnimesService {
  constructor(private http: HttpClient) {}

  private endPoints = {
    getByCategory: (id: number) =>
      `https://kitsu.io/api/edge/categories/${id}/anime?page[limit]=20`,

    getById: (id: number) => `https://kitsu.io/api/edge/anime/${id}`,

    getAll: () => `https://kitsu.io/api/edge/anime`,

    getRandomAnime: (offset: number) =>
      `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${offset}`,

    getBySearch: (text: string) =>
      `https://kitsu.io/api/edge/anime?filter[text]=${text}`,
  };

  getByCategory(idCategory: number): Observable<DataProps> {
    return this.http
      .get<DataProps>(this.endPoints.getByCategory(idCategory))
      .pipe(take(1));
  }

  getAnimeById(id: number): Observable<DataOneProps> {
    return this.http
      .get<DataOneProps>(this.endPoints.getById(id))
      .pipe(take(1));
  }

  getBySearch(text: string): Observable<DataProps> {
    return this.http
      .get<DataProps>(this.endPoints.getBySearch(text))
      .pipe(take(1));
  }

  getRandomAnime(): Observable<DataProps> {
    return this.http
      .get<DataProps>(
        this.endPoints.getRandomAnime(Math.floor(Math.random() * 45818))
      )
      .pipe(take(1));
  }
}
