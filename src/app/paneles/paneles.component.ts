import { Component, Input, OnInit } from '@angular/core';
import { event } from '../shared/event';
import { configService } from '../services/config.service';
import {DataSource} from '@angular/cdk/table';
import { CdkTableModule} from '@angular/cdk/table';

export interface PeriodicElement {
  numero: number;
  name: string;
  imagen: string;
}

@Component({
  selector: 'app-paneles',
  templateUrl: './paneles.component.html',
  styleUrls: ['./paneles.component.scss']
})

export class PanelesComponent implements OnInit {

  events: any = [];

  displayedColumns: string[] = ['numero', 'name', 'paneles', 'imagen', 'acciones'];
  dataSource = this.events;


  constructor(private configservice: configService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(){
    this.configservice.getEvents()
    .subscribe(res => {
      this.events = res;
    })
  }

  deleteEvent(id: string){
    this.configservice.deleteEvent(id)
    .subscribe(res => {
      console.log(res);
      this.getEvents();
    })
  }

}
