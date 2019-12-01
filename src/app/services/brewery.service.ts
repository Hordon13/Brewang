import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Brewery} from '../models/brewery';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {

  private url = 'https://api.openbrewerydb.org/breweries';

  constructor(private http: HttpClient) {
  }

  fetchBreweries(): Observable<Brewery[]> {
    return this.http.get<Brewery[]>(this.url);
  }
}
