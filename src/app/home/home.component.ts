import { Component, OnInit } from '@angular/core';
import { configService } from '../services/config.service';
import { Panel1Service } from '../services/panel1.service';
import { Panel2Service } from '../services/panel2.service';
import { Panel3Service } from '../services/panel3.service';
import { Panel4Service } from '../services/panel4.service';
import { Panel5Service } from '../services/panel5.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  events: any = [];
  selectedEvent: any;
  imgs: any;

  constructor(private configservice: configService, private panel1Service: Panel1Service, private panel2Service: Panel2Service, private panel3Service: Panel3Service, private panel4Service: Panel4Service, private panel5Service: Panel5Service ) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(){
    this.configservice.getEvents()
    .subscribe(res => {
      this.events = res;
    })
  }


  onSelect(event: any){
    this.selectedEvent = event;
  }


}
