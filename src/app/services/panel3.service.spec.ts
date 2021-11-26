import { TestBed } from '@angular/core/testing';

import { Panel3Service } from './panel3.service';

describe('Panel3Service', () => {
  let service: Panel3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Panel3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
