import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Temp3Service {
  constructor(private http: HttpClient) {}
  getTemp3(): Observable<any> {
    return this.http.get('../assets/temp3.json', { observe: 'response' });
  }
}
