import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ConsultantEditComponent } from './consultant-edit.component';
import { ConsultantService } from '../consultant.service';

describe('ConsultantEditComponent', () => {
  let component: ConsultantEditComponent;
  let fixture: ComponentFixture<ConsultantEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultantEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [ConsultantService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
