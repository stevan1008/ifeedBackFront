import { Component, Input, OnInit } from '@angular/core';
import { configService } from '../services/config.service';
import { Panel1Service } from '../services/panel1.service';
import { Panel2Service } from '../services/panel2.service';
import { Panel3Service } from '../services/panel3.service';
import { Panel4Service } from '../services/panel4.service';
import { Panel5Service } from '../services/panel5.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {

  @Input()
  event: any = [];
  img: any;

  constructor(private configservice: configService, private panel1Service: Panel1Service, private panel2Service: Panel2Service, private panel3Service: Panel3Service, private panel4Service: Panel4Service, private panel5Service: Panel5Service) { }

  ngOnInit(): void {
  }

  getEvents(){
    this.configservice.getEvents()
    .subscribe(res => {
      this.event = res;
    })
  }

  getImg(id: string){
    this.configservice.getImg(id)
    .subscribe(res => {
      this.img = res;
    })
  }

}
