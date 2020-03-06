import {Skill} from './skill';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  api = 'http://localhost:8282/';

  constructor(private http: HttpClient) {
  }

// get a skill by is id
  findById(id: string): Observable<Skill> {
    const url = `${this.api}skill/${id}`;
    const params = {id};
    return this.http.get<Skill>(url, {params, headers});
  }

// get all the skills in bdd
  findAll(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.api}skills/`);
  }

// update a skill by is id or persist a new one
  save(entity: Skill): Observable<Skill> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}skill/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Skill>(url, entity, {headers, params});
    } else {
      url = `${this.api}skill/`;
      return this.http.post<Skill>(url, entity, {headers, params});
    }
  }

// want to delete skills, use this function
  delete(entity: Skill): Observable<Skill> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}skill/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Skill>(url, {headers, params});
    }
    return null;
  }
}

