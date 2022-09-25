import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { firstValueFrom, map, Subject } from 'rxjs';
import { Criteria } from '../models';

@Injectable()
export class GiphyService {
  @Output()
  onNewResult = new Subject<string[]>();

  constructor(private http: HttpClient) {}

  search(criteria: Criteria): Promise<string[]> {
    console.log('>>> criteria: ', criteria);
    const params = new HttpParams()
      .set('api_key', criteria.apiKey)
      .set('q', criteria.search)
      .set('limit', criteria.results)
      .set('rating', criteria.rating);

    return firstValueFrom(
      this.http
        .get<any>('https://api.giphy.com/v1/gifs/search', { params })
        .pipe(
          map((result) => {
            console.log('>>> within map: ', result);
            const data = result.data;
            return data.map(
              (v: any) => v.images.fixed_height.url as string
            );
          })
        )
    );
  }
}
