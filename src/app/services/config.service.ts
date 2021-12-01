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

  getEvent(id: string){
    return this.http.get(`${this.URL}/config/${id}`);
  }

  deleteEvent(id: string){
    return this.http.delete(`${this.URL}/config/${id}`)
  }

  createEvent(title: string, img: File){
    const fd = new FormData();
    fd.append('title', title);
    fd.append('image', img);
    return this.http.post(`${this.URL}/config`, fd);
  }

  PostImg(body: any){
    return this.http.post(`${this.URL}/config/upload`, body);
  }

  getImg(id: string){
    return this.http.get(`${this.URL}/uploads/${id}`);
  }

  UpdateEvent(updateEvent: event){
    return this.http.put(`${this.URL}/config/${updateEvent.id_evento}`, updateEvent);
  }
}
