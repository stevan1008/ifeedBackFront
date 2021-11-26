import { TestBed } from '@angular/core/testing';

import { Panel4Service } from './panel4.service';

describe('Panel4Service', () => {
  let service: Panel4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Panel4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
