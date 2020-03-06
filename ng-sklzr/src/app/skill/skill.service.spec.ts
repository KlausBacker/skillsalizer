import { TestBed } from '@angular/core/testing';
import { SkillService } from './skill.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SkillService', () => {
  let service: SkillService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SkillService]
    });

    service = TestBed.get(SkillService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
