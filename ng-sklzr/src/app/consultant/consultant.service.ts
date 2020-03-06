import {Consultant} from './consultant';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {
  api = 'http://localhost:8282/';

  constructor(private http: HttpClient) {
  }

// get consultant by is id
  findById(id: string): Observable<Consultant> {
    const url = `${this.api}consultant/${id}`;
    const params = {id};
    return this.http.get<Consultant>(url, {params, headers});
  }

// get all the consultant in bdd
  findAll(): Observable<Consultant[]> {
    return this.http.get<Consultant[]>(`${this.api}consultants/`);
  }

// persist a new consultant or update an existing one
  save(entity: Consultant): Observable<Consultant> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}consultant/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Consultant>(url, entity, {headers, params});
    } else {
      url = `${this.api}consultant/`;
      return this.http.post<Consultant>(url, entity, {headers, params});
    }
  }

// delete a consultant
  delete(entity: Consultant): Observable<Consultant> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Consultant>(url, {headers, params});
    }
    return null;
  }
}

