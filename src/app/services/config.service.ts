import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { event } from '../shared/event';

@Injectable({
  providedIn: 'root'
})

export class configService{

  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getEvents(){
    return this.http.get(`${this.URL}/config`);
  }

  deleteEvent(id: string){
    return this.http.delete(`${this.URL}/config/${id}`)
  }

  createEvent(newEvent: event){
    return this.http.post(`${this.URL}/config`, newEvent);
  }

  UpdateEvent(updateEvent: event){
    return this.http.put(`${this.URL}/config/${updateEvent.id_evento}`, updateEvent);
  }
}
