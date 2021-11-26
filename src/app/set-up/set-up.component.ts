import { Component, OnInit } from '@angular/core';
import { PanelesComponent } from '../paneles/paneles.component';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { debounceTime } from 'rxjs';
import { configService } from '../services/config.service';
import { PanelesService } from '../services/paneles.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PanelDetailComponent } from '../panel-detail/panel-detail.component';

@Component({
  selector: 'app-set-up',
  templateUrl: './set-up.component.html',
  styleUrls: ['./set-up.component.scss']
})
export class SetUpComponent implements OnInit {

  data: any = {};
  paneles: any = [];
  events : any = [];
  selectedEvent: any;

  formSetUp!: FormGroup;

  constructor(private formBuilder: FormBuilder, private configservice: configService, private panelesService: PanelesService ,private router: Router, private _bottomSheet: MatBottomSheet, private activatedroute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(){
    this.configservice.getEvents()
    .subscribe((res) => {
      this.events = res;
    })
  }

  onSelect(event: any){
    this.selectedEvent = event;
  }

}
