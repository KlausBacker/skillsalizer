import { TestBed } from '@angular/core/testing';
import { SklevelService } from './sklevel.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SklevelService', () => {
  let service: SklevelService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SklevelService]
    });

    service = TestBed.get(SklevelService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
