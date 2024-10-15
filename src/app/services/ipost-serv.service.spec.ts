import { TestBed } from '@angular/core/testing';

import { IpostServService } from './ipost-serv.service';

describe('IpostServService', () => {
  let service: IpostServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpostServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
