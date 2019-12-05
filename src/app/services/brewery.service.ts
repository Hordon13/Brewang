import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Brewery} from '../models/brewery';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {
  constructor(private http: HttpClient) {
  }

  fetchBreweries(page): Observable<Brewery[]> {
    const url = 'https://api.openbrewerydb.org/breweries?page=' + page + '&per_page=10&sort=name';
    return this.http
      .get<Brewery[]>(url)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  fetchBrewery(id): Observable<Brewery> {
    const url = 'https://api.openbrewerydb.org/breweries/' + id;
    return this.http
      .get<Brewery>(url)
      .pipe(catchError((error: any) => throwError(error.json())));
  }
}
