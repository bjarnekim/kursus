import { TestBed, inject } from '@angular/core/testing';

import { BkadataService } from './bkadata.service';

describe('BkadataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BkadataService]
    });
  });

  it('should be created', inject([BkadataService], (service: BkadataService) => {
    expect(service).toBeTruthy();
  }));
});
