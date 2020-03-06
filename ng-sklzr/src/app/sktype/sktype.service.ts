import {Sktype} from './sktype';
import {SktypeFilter} from './sktype-filter';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Sklevel} from '../sklevel/sklevel';

const headers = new HttpHeaders({
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class SktypeService {
  sktypeList: Sktype[] = [];
  api = 'http://localhost:8282/';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Sktype> {
    const url = `${this.api}sktype/${id}`;
    const params = {id: id};
    return this.http.get<Sktype>(url, {params, headers});
  }

  findAll(): Observable<Sklevel[]> {
    return this.http.get<Sklevel[]>(`${this.api}sktypes/`);
  }


  load(): void {
    this.findAll().subscribe(result => {
        this.sktypeList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }


  save(entity: Sktype): Observable<Sktype> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}sktype/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Sktype>(url, entity, {headers, params});
    } else {
      url = `${this.api}sktype/`;
      return this.http.post<Sktype>(url, entity, {headers, params});
    }
  }

  delete(entity: Sktype): Observable<Sktype> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}sktype/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Sktype>(url, {headers, params});
    }
    return null;
  }
}

