import {Component, OnInit} from '@angular/core';
import {SktypeFilter} from '../sktype-filter';
import {SktypeService} from '../sktype.service';
import {Sktype} from '../sktype';

@Component({
  selector: 'app-sktype',
  templateUrl: 'sktype-list.component.html'
})
export class SktypeListComponent implements OnInit {
  sktypeList: Array<Sktype>;
  filter = new SktypeFilter();
  selectedSktype: Sktype;
  feedback: any = {};

  constructor(private sktypeService: SktypeService) {
  }

  ngOnInit() {
    this.loadsktypes();
  }

  loadsktypes(): void {
    this.sktypeService.findAll().subscribe(result => {
        this.sktypeList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  select(selected: Sktype): void {
    this.selectedSktype = selected;
  }

  delete(sktype: Sktype): void {
    if (confirm('Are you sure?')) {
      this.sktypeService.delete(sktype).subscribe(() => {
          this.feedback = {type: 'success', message: 'Delete was successful!'};
          setTimeout(() => {
            this.loadsktypes();
          }, 1000);
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error deleting.'};
        }
      );
    }
  }
}
