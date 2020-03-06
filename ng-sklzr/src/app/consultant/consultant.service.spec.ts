import { TestBed } from '@angular/core/testing';
import { ConsultantService } from './consultant.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ConsultantService', () => {
  let service: ConsultantService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConsultantService]
    });

    service = TestBed.get(ConsultantService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
