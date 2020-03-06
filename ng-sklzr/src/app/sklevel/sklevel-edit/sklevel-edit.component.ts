import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {SklevelService} from '../sklevel.service';
import {Sklevel} from '../sklevel';
import {map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-sklevel-edit',
  templateUrl: './sklevel-edit.component.html'
})
export class SklevelEditComponent implements OnInit {

  id: string;
  sklevel: Sklevel;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sklevelService: SklevelService) {
  }

// charging datas on start
  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') {
            return of(new Sklevel());
          }
          return this.sklevelService.findById(id);
        })
      )
      .subscribe(sklevel => {
          this.sklevel = sklevel;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      );
  }

// to save any levels
  save() {
    this.sklevelService.save(this.sklevel).subscribe(
      sklevel => {
        this.sklevel = sklevel;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(() => {
          this.router.navigate(['/sklevels']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    );
  }

// annultion of the action
  cancel() {
    this.router.navigate(['/sklevels']);
  }
}
