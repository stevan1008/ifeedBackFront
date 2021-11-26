import { TestBed } from '@angular/core/testing';

import { Panel5Service } from './panel5.service';

describe('Panel5Service', () => {
  let service: Panel5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Panel5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
