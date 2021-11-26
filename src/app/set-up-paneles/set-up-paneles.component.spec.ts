import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUpPanelesComponent } from './set-up-paneles.component';

describe('SetUpPanelesComponent', () => {
  let component: SetUpPanelesComponent;
  let fixture: ComponentFixture<SetUpPanelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetUpPanelesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetUpPanelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
