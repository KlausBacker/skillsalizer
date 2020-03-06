import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SklevelListComponent } from './sklevel-list.component';
import { SklevelService } from '../sklevel.service';

describe('SklevelListComponent', () => {
  let component: SklevelListComponent;
  let fixture: ComponentFixture<SklevelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SklevelListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [SklevelService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SklevelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
