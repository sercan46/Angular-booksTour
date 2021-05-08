import { TestBed } from '@angular/core/testing';

import { BookPageDetailService } from './book-page-detail.service';

describe('BookPageDetailService', () => {
  let service: BookPageDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookPageDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
