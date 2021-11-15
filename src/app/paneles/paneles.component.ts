import { Component, Input, OnInit } from '@angular/core';
import { event } from '../shared/event';
import { configService } from '../services/config.service';

@Component({
  selector: 'app-paneles',
  templateUrl: './paneles.component.html',
  styleUrls: ['./paneles.component.scss']
})
export class PanelesComponent implements OnInit {

  events: any = [];

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
