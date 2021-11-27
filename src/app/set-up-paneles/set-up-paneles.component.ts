import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Panel1Service } from '../services/panel1.service';
import { Panel2Service } from '../services/panel2.service';
import { Panel3Service } from '../services/panel3.service';
import { Panel4Service } from '../services/panel4.service';
import { Panel5Service } from '../services/panel5.service';
import { debounceTime } from 'rxjs';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
@Component({
  selector: 'app-set-up-paneles',
  templateUrl: './set-up-paneles.component.html',
  styleUrls: ['./set-up-paneles.component.scss']
})
export class SetUpPanelesComponent implements OnInit {

  form1!: FormGroup;
  form2!: FormGroup;
  form3!: FormGroup;
  form4!: FormGroup;
  form5!: FormGroup;


  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  panel1 : any = {
    color: 'primary',
    nombre_panel: "Panel 1",
    e_p_1: false,
    subtasks: [
      {conferencista_1_1: 'Conferencista 1', e_c_1: false, color: 'accent'}, //FALTA PREGUNTA CONFERENCISTAS
      {conferencista_1_2: 'Conferencista 2', e_c_2: false, color: 'accent'},
      {conferencista_1_3: 'Conferencista 3', e_c_3: false, color: 'accent'},
      {conferencista_1_4: 'Conferencista 4', e_c_4: false, color: 'accent'},
      {conferencista_1_5: 'Conferencista 5', e_c_5: false, color: 'accent'}
    ],
  };

  panel2 : any = {
    color: 'primary',
    nombre_panel: "Panel 2",
    e_p_2: false,
    subtasks: [
      {conferencista_2_1: 'Conferencista 1', e_c_1: false, color: 'accent'}, //FALTA PREGUNTA CONFERENCISTAS
      {conferencista_2_2: 'Conferencista 2', e_c_2: false, color: 'accent'},
      {conferencista_2_3: 'Conferencista 3', e_c_3: false, color: 'accent'},
      {conferencista_2_4: 'Conferencista 4', e_c_4: false, color: 'accent'},
      {conferencista_2_5: 'Conferencista 5', e_c_5: false, color: 'accent'}
    ],
  };

  panel3 : any = {
    color: 'primary',
    nombre_panel: "Panel 3",
    e_p_3: false,
    subtasks: [
      {conferencista_3_1: 'Conferencista 1', e_c_1: false, color: 'accent'}, //FALTA PREGUNTA CONFERENCISTAS
      {conferencista_3_2: 'Conferencista 2', e_c_2: false, color: 'accent'},
      {conferencista_3_3: 'Conferencista 3', e_c_3: false, color: 'accent'},
      {conferencista_3_4: 'Conferencista 4', e_c_4: false, color: 'accent'},
      {conferencista_3_5: 'Conferencista 5', e_c_5: false, color: 'accent'}
    ],
  };

  panel4 : any = {
    color: 'primary',
    nombre_panel: "Panel 4",
    e_p_4: false,
    subtasks: [
      {conferencista_4_1: 'Conferencista 1', e_c_1: false, color: 'accent'}, //FALTA PREGUNTA CONFERENCISTAS
      {conferencista_4_2: 'Conferencista 2', e_c_2: false, color: 'accent'},
      {conferencista_4_3: 'Conferencista 3', e_c_3: false, color: 'accent'},
      {conferencista_4_4: 'Conferencista 4', e_c_4: false, color: 'accent'},
      {conferencista_4_5: 'Conferencista 5', e_c_5: false, color: 'accent'}
    ],
  };

  panel5 : any = {
    color: 'primary',
    nombre_panel: "Panel 5",
    e_p_5: false,
    subtasks: [
      {conferencista_5_1: 'Conferencista 1', e_c_1: false, color: 'accent'}, //FALTA PREGUNTA CONFERENCISTAS
      {conferencista_5_2: 'Conferencista 2', e_c_2: false, color: 'accent'},
      {conferencista_5_3: 'Conferencista 3', e_c_3: false, color: 'accent'},
      {conferencista_5_4: 'Conferencista 4', e_c_4: false, color: 'accent'},
      {conferencista_5_5: 'Conferencista 5', e_c_5: false, color: 'accent'}
    ],
  };


  constructor(private formBuilder: FormBuilder, private panel1Service: Panel1Service, private panel2Service: Panel2Service, private panel3Service: Panel3Service, private panel4Service: Panel4Service, private panel5Service: Panel5Service) {
    this.buildForm1();
    this.buildForm2();
    this.buildForm3();
    this.buildForm4();
    this.buildForm5();
   }

  ngOnInit(): void {
  }

  private buildForm1() {
    this.form1 = this.formBuilder.group({
      nombre_panel: "Panel 1",
      e_p_1: false,
      conferencista_1_1: '',
      e_c_1: false, //FALTA PREGUNTA CONFERENCISTAS
      conferencista_1_2: '',
      e_c_2: false,
      conferencista_1_3: '',
      e_c_3: false,
      conferencista_1_4: '',
      e_c_4: false,
      conferencista_1_5: '',
      e_c_5: false,
    });

    this.form1.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value);
    });
  }

  private buildForm2() {
    this.form2 = this.formBuilder.group({
      nombre_panel: "Panel 2",
      e_p_2: false,
      conferencista_2_1: '',
      e_c_1: false, //FALTA PREGUNTA CONFERENCISTAS
      conferencista_2_2: '',
      e_c_2: false,
      conferencista_2_3: '',
      e_c_3: false,
      conferencista_2_4: '',
      e_c_4: false,
      conferencista_2_5: '',
      e_c_5: false,
    });

    this.form2.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value);
    });
  }

  private buildForm3() {
    this.form3 = this.formBuilder.group({
      nombre_panel: "Panel 3",
      e_p_3: false,
      conferencista_3_1: '',
      e_c_1: false, //FALTA PREGUNTA CONFERENCISTAS
      conferencista_3_2: '',
      e_c_2: false,
      conferencista_3_3: '',
      e_c_3: false,
      conferencista_3_4: '',
      e_c_4: false,
      conferencista_3_5: '',
      e_c_5: false,
    });

    this.form3.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value);
    });
  }

  private buildForm4() {
    this.form4 = this.formBuilder.group({
      nombre_panel: "Panel 4",
      e_p_4: false,
      conferencista_4_1: '',
      e_c_1: false, //FALTA PREGUNTA CONFERENCISTAS
      conferencista_4_2: '',
      e_c_2: false,
      conferencista_4_3: '',
      e_c_3: false,
      conferencista_4_4: '',
      e_c_4: false,
      conferencista_4_5: '',
      e_c_5: false,
    });

    this.form4.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value);
    });
  }

  private buildForm5() {
    this.form5 = this.formBuilder.group({
      nombre_panel: "Panel 5",
      e_p_5: false,
      conferencista_5_1: '',
      e_c_1: false, //FALTA PREGUNTA CONFERENCISTAS
      conferencista_5_2: '',
      e_c_2: false,
      conferencista_5_3: '',
      e_c_3: false,
      conferencista_5_4: '',
      e_c_4: false,
      conferencista_5_5: '',
      e_c_5: false,
    });

    this.form5.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value);
    });
  }

  task1: any = {
    name: 'Panel 1',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Conferencista 1', completed: false, color: 'accent'},
      {name: 'Conferencista 2', completed: false, color: 'accent'},
      {name: 'Conferencista 3', completed: false, color: 'accent'},
      {name: 'Conferencista 4', completed: false, color: 'accent'},
      {name: 'Conferencista 5', completed: false, color: 'accent'}
    ],
  };

  task2: Task = {
    name: 'Panel 2',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Conferencista 1', completed: false, color: 'accent'},
      {name: 'Conferencista 2', completed: false, color: 'accent'},
      {name: 'Conferencista 3', completed: false, color: 'accent'},
      {name: 'Conferencista 4', completed: false, color: 'accent'},
      {name: 'Conferencista 5', completed: false, color: 'accent'}
    ],
  };

  task3: Task = {
    name: 'Panel 3',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Conferencista 1', completed: false, color: 'accent'},
      {name: 'Conferencista 2', completed: false, color: 'accent'},
      {name: 'Conferencista 3', completed: false, color: 'accent'},
      {name: 'Conferencista 4', completed: false, color: 'accent'},
      {name: 'Conferencista 5', completed: false, color: 'accent'}
    ],
  };

  task4: Task = {
    name: 'Panel 4',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Conferencista 1', completed: false, color: 'accent'},
      {name: 'Conferencista 2', completed: false, color: 'accent'},
      {name: 'Conferencista 3', completed: false, color: 'accent'},
      {name: 'Conferencista 4', completed: false, color: 'accent'},
      {name: 'Conferencista 5', completed: false, color: 'accent'}
    ],
  };

  task5: Task = {
    name: 'Panel 5',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Conferencista 1', completed: false, color: 'accent'},
      {name: 'Conferencista 2', completed: false, color: 'accent'},
      {name: 'Conferencista 3', completed: false, color: 'accent'},
      {name: 'Conferencista 4', completed: false, color: 'accent'},
      {name: 'Conferencista 5', completed: false, color: 'accent'}
    ],
  };

  allComplete1: boolean = false;

  updateAllComplete1() {
    this.allComplete1 = this.panel1.subtasks != null && this.panel1.subtasks.every((t: any) => t.completed);
  }

  someComplete1(): boolean {
    if (this.panel1.subtasks == null) {
      return false;
    }
    return this.panel1.subtasks.filter((t: any) => {
      //console.log("valor: ", t);
      t.completed}).length > 0 && !this.allComplete1;
  }

  setAll1(completed: boolean) {
    this.allComplete1 = completed;
    if (this.panel1.subtasks == null) {
      return;
    }
    this.panel1.subtasks.forEach((t: any) => {
      console.log("jhbsjdbhk", t);
      t.completed = completed;
    })
  }

  allComplete2: boolean = false;

  updateAllComplete2() {
    this.allComplete2 = this.task2.subtasks != null && this.task2.subtasks.every(t => t.completed);
  }

  someComplete2(): boolean {
    if (this.task2.subtasks == null) {
      return false;
    }
    return this.task2.subtasks.filter(t => t.completed).length > 0 && !this.allComplete2;
  }

  setAll2(completed: boolean) {
    this.allComplete2 = completed;
    if (this.task2.subtasks == null) {
      return;
    }
    this.task2.subtasks.forEach(t => (t.completed = completed));
  }

  allComplete3: boolean = false;

  updateAllComplete3() {
    this.allComplete3 = this.task3.subtasks != null && this.task3.subtasks.every(t => t.completed);
  }

  someComplete3(): boolean {
    if (this.task3.subtasks == null) {
      return false;
    }
    return this.task3.subtasks.filter(t =>  t.completed).length > 0 && !this.allComplete3;
  }

  setAll3(completed: boolean) {
    this.allComplete3 = completed;
    if (this.task3.subtasks == null) {
      return;
    }
    this.task3.subtasks.forEach(t => (t.completed = completed));
  }

  allComplete4: boolean = false;

  updateAllComplete4() {
    this.allComplete4 = this.task4.subtasks != null && this.task4.subtasks.every(t => t.completed);
  }

  someComplete4(): boolean {
    if (this.task4.subtasks == null) {
      return false;
    }
    return this.task4.subtasks.filter(t => t.completed).length > 0 && !this.allComplete1;
  }

  setAll4(completed: boolean) {
    this.allComplete4 = completed;
    if (this.task4.subtasks == null) {
      return;
    }
    this.task4.subtasks.forEach(t => (t.completed = completed));
  }

  allComplete5: boolean = false;

  updateAllComplete5() {
    this.allComplete5 = this.task1.subtasks != null && this.task1.subtasks.every((t: any) => t.completed);
  }

  someComplete5(): boolean {
    if (this.task5.subtasks == null) {
      return false;
    }
    return this.task5.subtasks.filter(t => t.completed).length > 0 && !this.allComplete5;
  }

  setAll5(completed: boolean) {
    this.allComplete5 = completed;
    if (this.task5.subtasks == null) {
      return;
    }
    this.task5.subtasks.forEach(t => (t.completed = completed));
  }

  getPanel1(){
    this.panel1Service.getPanelUno()
    .subscribe(res => {
      this.panel1 = res;
    })
  }

  createPanel(panel: any){
    this.panel1Service.PostPaneUno(panel)
    .subscribe(res => {
      this.panel1 = res;
    })
  }

  save1(event: Event){
    event.preventDefault();
    if (this.form1.valid) {
      const value = this.form1.value;
      console.log("valor :", value);
      this.panel1Service.PostPaneUno(value)
      .subscribe((res) => {
        console.log(res);
      })
    }
  }

  save2(event: Event){
    event.preventDefault();
    if (this.form2.valid) {
      const value = this.form2.value;
      console.log("valor :", value);
      this.panel2Service.PostPanelDos(value)
      .subscribe((res) => {
        console.log(res);
      })
    }
  }

  save3(event: Event){
    event.preventDefault();
    if (this.form3.valid) {
      const value = this.form3.value;
      console.log("valor :", value);
      this.panel3Service.PostPanelTres(value)
      .subscribe((res) => {
        console.log(res);
      })
    }
  }

  save4(event: Event){
    event.preventDefault();
    if (this.form4.valid) {
      const value = this.form4.value;
      console.log("valor :", value);
      this.panel4Service.postPanelCuatro(value)
      .subscribe((res) => {
        console.log(res);
      })
    }
  }

  save5(event: Event){
    event.preventDefault();
    if (this.form5.valid) {
      const value = this.form5.value;
      console.log("valor :", value);
      this.panel5Service.postPanelCinco(value)
      .subscribe((res) => {
        console.log(res);
      })
    }
  }

/*   onChange($event: any){
    const id = $event.target.value;
    const isChecked = $event.target.checked;
    console.log(id, isChecked);
  } */

}
