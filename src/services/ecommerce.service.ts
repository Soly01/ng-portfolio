import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EcommerceService {
  constructor(private http: HttpClient) {}
  getPics(): Observable<any> {
    return this.http.get('../assets/ecommerce.json', { observe: 'response' });
  }
}
