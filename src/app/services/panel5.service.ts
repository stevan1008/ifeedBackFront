import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Panel5Service {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:3000';

  postPanelCinco(panel: any){
    return this.http.post(`${this.URL}/fifthpanel`, panel);
  }

  getPanelCinco(){
    return this.http.get(`${this.URL}/fifthpanel`);
  }

  getEspPanelCinco(id: string){
    return this.http.get(`${this.URL}/fifthpanel/${id}`);
  }

  updatePanelCinco(panel: any){
    return this.http.put(`${this.URL}/fifthpanel/${panel.id}`, panel);
  }

  deletePanelCinco(id: string){
    return this.http.delete(`${this.URL}/fifthpanel/${id}`);
  }
}
