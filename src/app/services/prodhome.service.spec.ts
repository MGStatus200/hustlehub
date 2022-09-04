import { TestBed } from '@angular/core/testing';

import { ProdhomeService } from './prodhome.service';

describe('ProdhomeService', () => {
  let service: ProdhomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdhomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
