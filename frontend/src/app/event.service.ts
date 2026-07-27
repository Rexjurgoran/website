import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { Event } from './event';
import { EVENTS } from './mock-events';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private readonly backendUrl = environment.backendUrl?.replace(/\/+$/u, '');
  private readonly eventsUrl = this.backendUrl ? `${this.backendUrl}/events` : '';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private readonly http: HttpClient) { }

  /** GET events from the server, or fallback to local mock events when no backend is configured */
  getEvents(): Observable<Event[]> {
    if (!this.backendUrl) {
      return of(EVENTS);
    }

    return this.http.get<Event[]>(this.eventsUrl, this.httpOptions)
      .pipe(
        catchError(this.handleError<Event[]>(EVENTS))
      );
  }

  private handleError<T>(result?: T){
    return (error: any): Observable<T> => {
      console.warn(error);
      return of(result as T);
    }
  }
}
