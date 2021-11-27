import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Panel3Service {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:3000';

  PostPanelTres(panel: any){
    return this.http.post(`${this.URL}/thirdpanel`, panel);
  }

  getPanelTres(){
    return this.http.get(`${this.URL}/thirdpanel`);
  }

  getEspPanelTres(id: string){
    return this.http.get(`${this.URL}/thirdpanel/${id}`);
  }

  updatePanelTres(panel: any){
    return this.http.put(`${this.URL}/thirdpanel/${panel.id}`, panel);
  }

  deletePanelTres(id: string){
    return this.http.delete(`${this.URL}/thirdpanel/${id}`);
  }
}
