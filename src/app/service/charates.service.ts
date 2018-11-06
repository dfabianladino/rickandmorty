import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharatesService {

  API_ENDPOINT = 'https://rickandmortyapi.com/api';

  constructor(private http: Http) { }

  getHome(): Observable<any> {
    return this.http.get(this.API_ENDPOINT + '/character/1,2,3');
  }

  getAllCharacters(): Observable<any> {
    return this.http.get(this.API_ENDPOINT + '/character/');
  }

  getDetailCharacters(id): Observable<any> {
    return this.http.get(this.API_ENDPOINT + '/character/id');
  }
}
