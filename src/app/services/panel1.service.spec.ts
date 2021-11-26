import { TestBed } from '@angular/core/testing';

import { Panel1Service } from './panel1.service';

describe('Panel1Service', () => {
  let service: Panel1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Panel1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
