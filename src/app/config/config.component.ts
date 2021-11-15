import { Component, OnInit } from '@angular/core';
import { PanelesComponent } from '../paneles/paneles.component';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { configService } from '../services/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private configservice: configService, private router: Router) {
    this.buildForm()
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      event_name: ['', [Validators.required]],
      paneles: ['', [Validators.required]]
    });

    this.form.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value);
    });
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log("valor: ", value);
      this.configservice.createEvent(value)
      .subscribe((res) => {
        this.router.navigate(['/home']);
      })
    }
  }

}
