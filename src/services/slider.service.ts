import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SliderService {
  constructor(private http: HttpClient) {}
  getSlider(): Observable<any> {
    return this.http.get('../assets/slider.json', { observe: 'response' });
  }
}
