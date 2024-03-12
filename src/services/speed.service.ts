import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpeedService {
  constructor(private http: HttpClient) {}
  getSpeed(): Observable<any> {
    return this.http.get('../assets/speed.json', { observe: 'response' });
  }
}
