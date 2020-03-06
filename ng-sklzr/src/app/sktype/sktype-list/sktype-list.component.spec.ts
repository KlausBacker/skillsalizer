import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SktypeListComponent } from './sktype-list.component';
import { SktypeService } from '../sktype.service';

describe('SktypeListComponent', () => {
  let component: SktypeListComponent;
  let fixture: ComponentFixture<SktypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SktypeListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [SktypeService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SktypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
