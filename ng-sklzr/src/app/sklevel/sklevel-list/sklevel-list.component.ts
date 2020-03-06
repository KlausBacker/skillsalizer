import {Component, OnInit} from '@angular/core';
import {SklevelService} from '../sklevel.service';
import {Sklevel} from '../sklevel';

@Component({
  selector: 'app-sklevel',
  templateUrl: 'sklevel-list.component.html'
})
export class SklevelListComponent implements OnInit {
  sklevelList: Array<Sklevel>;
  selectedSklevel: Sklevel;
  feedback: any = {};

  constructor(private sklevelService: SklevelService) {
  }

  ngOnInit() {
    this.loadSklevels();
  }

// loading datas
  loadSklevels() {
    this.sklevelService.findAll().subscribe(result => {
        this.sklevelList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  select(selected: Sklevel): void {
    this.selectedSklevel = selected;
  }

// deleting data
  delete(sklevel: Sklevel): void {
    if (confirm('Are you sure?')) {
      this.sklevelService.delete(sklevel).subscribe(() => {
          this.feedback = {type: 'success', message: 'Delete was successful!'};
          setTimeout(() => {
            this.loadSklevels();
          }, 1000);
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error deleting.'};
        }
      );
    }
  }
}
