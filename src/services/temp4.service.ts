import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Temp4Service {
  constructor(private http: HttpClient) {}
  getTemp4(): Observable<any> {
    return this.http.get('../assets/temp4.json', { observe: 'response' });
  }
}
