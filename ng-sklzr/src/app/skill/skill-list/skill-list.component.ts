import {Component, OnInit} from '@angular/core';
import {SkillService} from '../skill.service';
import {Skill} from '../skill';

@Component({
  selector: 'app-skill',
  templateUrl: 'skill-list.component.html'
})
export class SkillListComponent implements OnInit {
  skillList: Array<Skill>;
  selectedSkill: Skill;
  feedback: any = {};

  constructor(private skillService: SkillService) {
  }

  ngOnInit() {
    this.loadSkills();
  }

// get a list of skills
  loadSkills(): void {
    this.skillService.findAll().subscribe(result => {
        this.skillList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }


  select(selected: Skill): void {
    this.selectedSkill = selected;
  }

// delete some skills ? this way =>
  delete(skill: Skill): void {
    if (confirm('Are you sure?')) {
      this.skillService.delete(skill).subscribe(() => {
          this.feedback = {type: 'success', message: 'Delete was successful!'};
          setTimeout(() => {
            this.loadSkills();
          }, 1000);
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error deleting.'};
        }
      );
    }
  }
}
