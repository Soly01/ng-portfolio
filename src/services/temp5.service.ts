import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Temp5Service {
  constructor(private http: HttpClient) {}
  getTemp5(): Observable<any> {
    return this.http.get('../assets/temp5.json', { observe: 'response' });
  }
}
