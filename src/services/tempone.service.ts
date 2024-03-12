import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TemponeService {
  constructor(private http: HttpClient) {}
  getTemp1(): Observable<any> {
    return this.http.get('../assets/temp1.json', { observe: 'response' });
  }
}
