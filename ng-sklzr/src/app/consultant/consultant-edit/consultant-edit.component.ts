import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {ConsultantService} from '../consultant.service';
import {Consultant} from '../consultant';
import {map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-consultant-edit',
  templateUrl: './consultant-edit.component.html'
})
export class ConsultantEditComponent implements OnInit {
  id: string;
  consultant: Consultant;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private consultantService: ConsultantService) {
  }

  ngOnInit() {
    // Data loading
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') {
            return of(new Consultant());
          }
          return this.consultantService.findById(id);
        })
      )
      .subscribe(consultant => {
          this.consultant = consultant;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      );
  }

// Persist Datas in bdd
  save() {
    this.consultantService.save(this.consultant).subscribe(
      consultant => {
        this.consultant = consultant;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(() => {
          this.router.navigate(['/consultants']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    );
  }

// annulation
  cancel() {
    this.router.navigate(['/consultants']);
  }
}
