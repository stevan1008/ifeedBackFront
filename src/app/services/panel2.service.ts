import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Panel2Service {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:3000';

  getPanelDos(){
    return this.http.get(`${this.URL}/secondpanel`);
  }

  getEspPanelDos(id: string){
    return this.http.get(`${this.URL}/secondpanel/${id}`);
  }

  updatePanelDos(panel: any){
    return this.http.put(`${this.URL}/secondpanel/${panel.id}`, panel);
  }

  deletePanelDos(id: string){
    return this.http.delete(`${this.URL}/secondpanel/${id}`);
  }
}
