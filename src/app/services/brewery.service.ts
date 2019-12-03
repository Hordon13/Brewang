import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Brewery} from '../models/brewery';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {

  private url = 'https://api.openbrewerydb.org/breweries?page=300&per_page=10&sort=name';

  constructor(private http: HttpClient) {
  }

  fetchBreweries(): Observable<Brewery[]> {
    return this.http
      .get<Brewery[]>(this.url)
      .pipe(catchError((error: any) => throwError(error.json())));
  }
}
