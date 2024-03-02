import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commune } from '../models/commune.model';

@Injectable({
  providedIn: 'root'
})
export class CommunesService {

  constructor(private http: HttpClient) { }

  getCommunes(): Observable<Commune[]> {
    return this.http.get<Commune[]>('../assets/communes-nc_v1.json');
  }
}