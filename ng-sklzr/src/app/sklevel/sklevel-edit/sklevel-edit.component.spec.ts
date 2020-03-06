import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SklevelEditComponent } from './sklevel-edit.component';
import { SklevelService } from '../sklevel.service';

describe('SklevelEditComponent', () => {
  let component: SklevelEditComponent;
  let fixture: ComponentFixture<SklevelEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SklevelEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [SklevelService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SklevelEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
