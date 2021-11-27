import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Panel1Service {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:3000';

  PostPaneUno(panel: any){
    return this.http.post(`${this.URL}/firstpanel`, panel);
  }

  getPanelUno(){
    return this.http.get(`${this.URL}/firstpanel`);
  }

  getEspPanelUno(id: string){
    return this.http.get(`${this.URL}/firstpanel/${id}`);
  }

  updatePanelUno(panel: any){
    return this.http.put(`${this.URL}/firstpanel/${panel.id}`, panel);
  }

  deletePanelUno(id: string){
    return this.http.delete(`${this.URL}/firstpanel/${id}`);
  }
}
