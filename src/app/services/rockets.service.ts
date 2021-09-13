import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RocketsService {
  url: 'https://api.spacexdata.com/v3/';

  constructor(private httpClient: HttpClient) {}

  getRockets(): Observable<any> {
    return this.httpClient.get('https://api.spacexdata.com/v3/rockets');
  }

  getLauches(): Observable<any> {
    return this.httpClient.get('https://api.spacexdata.com/v3/launches');
  }
}
