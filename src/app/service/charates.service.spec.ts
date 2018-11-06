import { TestBed } from '@angular/core/testing';

import { CharatesService } from './charates.service';

describe('CharatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharatesService = TestBed.get(CharatesService);
    expect(service).toBeTruthy();
  });
});
