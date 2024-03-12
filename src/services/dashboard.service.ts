import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}
  getDash(): Observable<any> {
    return this.http.get('../assets/dashboard.json', { observe: 'response' });
  }
}
