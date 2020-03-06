import {Sklevel} from './sklevel';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

const headers = new HttpHeaders({
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class SklevelService {
  api = 'http://localhost:8282/';

  constructor(private http: HttpClient) {
  }

// to get only one levels by is id
  findById(id: string): Observable<Sklevel> {
    const url = `${this.api}sklevel/${id}`;
    const params = {id};
    return this.http.get<Sklevel>(url, {params, headers});
  }

// to get all the levels in the bdd
  findAll(): Observable<Sklevel[]> {
    return this.http.get<Sklevel[]>(`${this.api}sklevels/`);
  }

// to save or update levels datas
  save(entity: Sklevel): Observable<Sklevel> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}sklevel/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Sklevel>(url, entity, {headers, params});
    } else {
      url = `${this.api}sklevel/`;
      return this.http.post<Sklevel>(url, entity, {headers, params});

    }
  }

// delete levels with this function
  delete(entity: Sklevel): Observable<Sklevel> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}sklevel/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Sklevel>(url, {headers, params});
    }
    return null;
  }
}

