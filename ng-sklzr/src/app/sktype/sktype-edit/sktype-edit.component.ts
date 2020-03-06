import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SktypeService } from '../sktype.service';
import { Sktype } from '../sktype';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-sktype-edit',
  templateUrl: './sktype-edit.component.html'
})
export class SktypeEditComponent implements OnInit {

  id: string;
  sktype: Sktype;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sktypeService: SktypeService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Sktype()); }
          return this.sktypeService.findById(id);
        })
      )
      .subscribe(sktype => {
          this.sktype = sktype;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      );
  }

  save() {
    this.sktypeService.save(this.sktype).subscribe(
      sktype => {
        this.sktype = sktype;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(() => {
          this.router.navigate(['/sktypes']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/sktypes']);
  }
}
