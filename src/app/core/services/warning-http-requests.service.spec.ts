import { TestBed } from '@angular/core/testing';

import { WarningHttpRequestsService } from './warning-http-requests.service';

describe('WarningHttpRequestsService', () => {
  let service: WarningHttpRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarningHttpRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
