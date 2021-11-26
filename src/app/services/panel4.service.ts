import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Panel4Service {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:3000';

  getPanelCuatro(){
    return this.http.get(`${this.URL}/fourthpanel`);
  }

  getEspPanelCuatro(id: string){
    return this.http.get(`${this.URL}/fourthpanel/${id}`);
  }

  updatePanelCuatro(panel: any){
    return this.http.put(`${this.URL}/fourthpanel/${panel.id}`, panel);
  }

  deletePanelCuatro(id: string){
    return this.http.delete(`${this.URL}/fourthpanel/${id}`);
  }
}
