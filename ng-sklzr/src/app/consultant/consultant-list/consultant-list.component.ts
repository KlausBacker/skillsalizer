import {Component, OnInit} from '@angular/core';
import {ConsultantService} from '../consultant.service';
import {Consultant} from '../consultant';

@Component({
  selector: 'app-consultant',
  templateUrl: 'consultant-list.component.html'
})
export class ConsultantListComponent implements OnInit {
  consultantList: Array<Consultant>;
  selectedConsultant: Consultant;
  feedback: any = {};

  constructor(private consultantService: ConsultantService) {
  }

  ngOnInit() {
    this.loadConsultants();
  }

// Get the list of datas
  loadConsultants(): void {
    this.consultantService.findAll().subscribe(result => {
        this.consultantList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  select(selected: Consultant): void {
    this.selectedConsultant = selected;
  }

// deleting datas
  delete(consultant: Consultant): void {
    if (confirm('Are you sure?')) {
      this.consultantService.delete(consultant).subscribe(() => {
          this.feedback = {type: 'success', message: 'Delete was successful!'};
          setTimeout(() => {
            this.loadConsultants();
          }, 1000);
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error deleting.'};
        }
      );
    }
  }
}
