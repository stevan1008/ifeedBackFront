import { Component, Input, OnInit } from '@angular/core';
import { configService } from '../services/config.service';
import { PanelesService } from '../services/paneles.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-panel-detail',
  templateUrl: './panel-detail.component.html',
  styleUrls: ['./panel-detail.component.scss']
})
export class PanelDetailComponent implements OnInit {

  form!: FormGroup;
  @Input()
  event: any
  panel: any

  constructor(private configservice: configService, private panelesService: PanelesService) { }

  ngOnInit(): void {
  }

  getPaneles(){
    this.panelesService.getPaneles()
    .subscribe(res => {
      this.panel = res;
    })
  }

  getEvents(){
    this.configservice.getEvents()
    .subscribe(res => {
      this.event = res;
    })
  }

}
