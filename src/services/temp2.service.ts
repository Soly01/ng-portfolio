import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Temp2Service {
  constructor(private http: HttpClient) {}
  getTemp2(): Observable<any> {
    return this.http.get('../assets/temp2.json', { observe: 'response' });
  }
}
