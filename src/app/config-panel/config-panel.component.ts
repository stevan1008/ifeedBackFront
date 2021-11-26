import { Component, Input, OnInit } from '@angular/core';
import { event } from '../shared/event';
import { configService } from '../services/config.service';
import {DataSource} from '@angular/cdk/table';
import { CdkTableModule} from '@angular/cdk/table';
import { PanelesService } from '../services/paneles.service';

@Component({
  selector: 'app-config-panel',
  templateUrl: './config-panel.component.html',
  styleUrls: ['./config-panel.component.scss']
})
export class ConfigPanelComponent implements OnInit {

  panels: any = [];
  events: any = [];

  displayedColumns: string[] = ['numero', 'nombre', 'acciones'];
  dataSource = this.panels;

  constructor(private panelesService: PanelesService, private configservice: configService) { }

  ngOnInit(): void {
    this.getEvents();
    this.getPanels();
  }

  getEvents(){
    this.configservice.getEvents()
    .subscribe(res => {
      this.events = res;
    })
  }

  getPanels(){
    this.panelesService.getPaneles()
    .subscribe(res => {
      this.panels = res;
    })
  }

  deletePanel(id: string){
    this.panelesService.deletePanel(id)
    .subscribe(res => {
      console.log(res);
      this.getPanels();
    })
  }


}
