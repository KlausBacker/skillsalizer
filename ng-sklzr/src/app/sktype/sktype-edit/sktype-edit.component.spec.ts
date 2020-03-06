import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SktypeEditComponent } from './sktype-edit.component';
import { SktypeService } from '../sktype.service';

describe('SktypeEditComponent', () => {
  let component: SktypeEditComponent;
  let fixture: ComponentFixture<SktypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SktypeEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [SktypeService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SktypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
