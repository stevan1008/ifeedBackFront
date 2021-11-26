import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Panel1Service } from '../services/panel1.service';
import { Panel2Service } from '../services/panel2.service';
import { Panel3Service } from '../services/panel3.service';
import { Panel4Service } from '../services/panel4.service';
import { Panel5Service } from '../services/panel5.service';

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

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  constructor(fb: FormBuilder, private panel1Service: Panel1Service, private panel2Service: Panel2Service, private panel3Service: Panel3Service, panel4Service: Panel4Service, panel5Service: Panel5Service) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
   }

  ngOnInit(): void {
  }

  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'},
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }
}
