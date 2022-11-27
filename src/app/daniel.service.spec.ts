import { TestBed } from '@angular/core/testing';

import { DanielService } from './daniel.service';

describe('DanielService', () => {
  let service: DanielService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DanielService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
