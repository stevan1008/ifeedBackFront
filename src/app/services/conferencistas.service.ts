import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConferencistasService {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:3000';

  getConferencistas(){
    return this.http.get(`${this.URL}/conference`);
  }

  getConferencista(id: string){
    return this.http.get(`${this.URL}/conference/${id}`);
  }

  updateConferencista(confere: any){
    return this.http.put(`${this.URL}/${confere.id_conferencista}`, confere);
  }

  deleteConferencista(id: string){
    return this.http.delete(`${this.URL}/conference/${id}`);
  }
}
