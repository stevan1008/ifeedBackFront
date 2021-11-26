import { Component, OnInit } from '@angular/core';
import { PanelesComponent } from '../paneles/paneles.component';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { debounceTime } from 'rxjs';
import { configService } from '../services/config.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  form!: FormGroup;
  edit: boolean = false;

  public miniatura: string = '';

  images: any = [];

  res: any = []

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private configservice: configService, private router: Router, private _bottomSheet: MatBottomSheet, private activatedroute: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.buildForm()
  }

  ngOnInit(): void {
    const params = this.activatedroute.snapshot.params;
    console.log(params);
    if(params['id']){
      this.configservice.getEvent(params['id'])
      .subscribe((res) => {
        this.res = res;
        this.form = this.formBuilder.group({
          event_name: [this.res[0].event_name, [Validators.required]],
          n_paneles: [this.res[0].n_paneles, [Validators.required]],
          // image: [this.res[0].image, [Validators.required]],
        });
        this.edit = true;
      })
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      event_name: ['', [Validators.required]],
      n_paneles: ['', [Validators.required]],
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

  extraerBase64 = async ($event: any) => new Promise((resolve) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  })

  capturarFile(event: any) {
    const file = event.target.files[0];
    this.extraerBase64(file).then((imagen: any) => {
      this.miniatura = imagen.base;
      console.log(imagen)});
    this.images = file;
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log("valor: ", value);
      this.configservice.createEvent(value)
      .subscribe((res) => {
        this.router.navigate(['/config/settings']);
      })
    }
  }

  update(event: Event){
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log("valor: ", value);
      this.configservice.UpdateEvent(value)
      .subscribe((res) => {
        this.router.navigate(['/config/:id']);
      })
    }
  }

  subirArchivo(): any {
    try {
      const formularioDeDatos = new FormData();
      formularioDeDatos.append('file', this.images);
      this.http.post<any>('http://localhost:3000/config/upload', formularioDeDatos)
      .subscribe((res) => {
        console.log(res);
      })
    } catch (e) {
      console.log('ERROR', e);
    }
  }
}

