import { Component, OnInit } from '@angular/core';
import { PanelesComponent } from '../paneles/paneles.component';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { debounceTime } from 'rxjs';
import { configService } from '../services/config.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent implements OnInit {

  form!: FormGroup;
  edit: boolean = false;

  archivos: any = [];
  res: any = []

  constructor(private formBuilder: FormBuilder, private configservice: configService, private router: Router, private _bottomSheet: MatBottomSheet, private activatedroute: ActivatedRoute) {
    this.buildForm()
  }

  ngOnInit(): void {
    const params = this.activatedroute.snapshot.params;
    console.log(params)
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      event_name: ['', [Validators.required]],
      image: ['', [Validators.required]]
    });

    this.form.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value);
    });
  }


}
