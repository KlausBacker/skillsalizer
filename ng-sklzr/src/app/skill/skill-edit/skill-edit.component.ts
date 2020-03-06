import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {SkillService} from '../skill.service';
import {Skill} from '../skill';
import {map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Sktype} from '../../sktype/sktype';
import {SktypeService} from '../../sktype/sktype.service';

@Component({
  selector: 'app-skill-edit',
  templateUrl: './skill-edit.component.html'
})
export class SkillEditComponent implements OnInit {

  id: string;
  skill: Skill;
  sktypeList: Array<Sktype>;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private skillService: SkillService,
    private sktypeService: SktypeService) {
  }

// loading data at start
  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') {
            return of(new Skill());
          }
          return this.skillService.findById(id);
        })
      )
      .subscribe(skill => {
          this.skill = skill;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      );
    this.loadsktypes();
  }

// persist new skill
  save() {
    this.skillService.save(this.skill).subscribe(
      skill => {
        this.skill = skill;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(() => {
          this.router.navigate(['/skills']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    );
  }

// annulation
  cancel() {
    this.router.navigate(['/skills']);
  }

// get a list of skills types
  loadsktypes(): void {
    this.sktypeService.findAll().subscribe(result => {
        this.sktypeList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }
}
