import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Event } from './event';
import { EVENTS } from './mock-events';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventsUrl = "api/events"

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  /** GET events from the server */
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl)
      .pipe(
        catchError(this.handleError<Event[]>(EVENTS))
      )
  }

  private handleError<T>(result?: T){
    return (error: any): Observable<T> => {
      console.warn(error);
      return of(result as T);
    }
  }
}
