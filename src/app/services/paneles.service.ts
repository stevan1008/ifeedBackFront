import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PanelesService {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:3000';

  getPaneles(){
    return this.http.get(`${this.URL}/panels`);
  }

  getSinglePanel(id: string){
    return this.http.get(`${this.URL}/panels/${id}`);
  }

  updatePanel(panel: any){
    return this.http.put(`${this.URL}/panels/${panel.id_panel}`, panel);
  }

  deletePanel(id: string){
    return this.http.delete(`${this.URL}/panels/${id}`);
  }
}
