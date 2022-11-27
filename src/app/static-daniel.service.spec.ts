import { TestBed } from '@angular/core/testing';

import { StaticDanielService } from './static-daniel.service';

describe('StaticDanielService', () => {
  let service: StaticDanielService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticDanielService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
