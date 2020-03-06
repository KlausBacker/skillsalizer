import { TestBed } from '@angular/core/testing';
import { SktypeService } from './sktype.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SktypeService', () => {
  let service: SktypeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SktypeService]
    });

    service = TestBed.get(SktypeService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
