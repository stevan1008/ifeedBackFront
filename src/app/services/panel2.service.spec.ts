import { TestBed } from '@angular/core/testing';

import { Panel2Service } from './panel2.service';

describe('Panel2Service', () => {
  let service: Panel2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Panel2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
