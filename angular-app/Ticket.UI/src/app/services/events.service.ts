import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {EventModel} from "../models/event.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  baseApiUrl:string=environment.baseapiUrl;
  constructor(private http:HttpClient) { }

  getAllEvents() : Observable<EventModel[]>{
    return this.http.get<EventModel[]>(this.baseApiUrl+"/api/eventsapi");
  }
  getEvent(id:string) :Observable<EventModel>{
    return this.http.get<EventModel>(this.baseApiUrl+"/api/eventsapi/"+id);
  }

  createEvent(newEvent: EventModel): Observable<EventModel> {
    return this.http.post<EventModel>(this.baseApiUrl + "/api/eventsapi", newEvent);
  }

  updateEvent(id: string, updatedEvent: EventModel): Observable<EventModel> {
    return this.http.put<EventModel>(this.baseApiUrl + "/api/eventsapi/" + id, updatedEvent);
  }

  deleteEvent(id: string): Observable<void> {
    return this.http.delete<void>(this.baseApiUrl + "/api/eventsapi/" + id);
  }

}
