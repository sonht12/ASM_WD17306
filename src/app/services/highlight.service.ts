import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { IHighlight } from '../interface/highlight';
@Injectable({
  providedIn: 'root'
})
export class HighlightService {
  API_URL: string = 'http://localhost:8088/api';
  constructor(private http: HttpClient) { }

  getHighlights(): Observable<any[]> {
    return this.http.get<IHighlight[]>(`${this.API_URL}/highlight`);
  }
  getHighlight(id:any): Observable<IHighlight> {
    return this.http.get<IHighlight>(`${this.API_URL}/highlight/` + id);
  }
  addHighlight(highlight: IHighlight): Observable<IHighlight> {
    return this.http.post<IHighlight>(`${this.API_URL}/highlight`, highlight);
  }
  updateHighlight(highlight: IHighlight): Observable<IHighlight> {
    return this.http.put<IHighlight>(`${this.API_URL}/highlight/${highlight._id}/`, highlight);
}
deleteHighlight(id: number | string): Observable<IHighlight> {
  return this.http.delete<IHighlight>(`${this.API_URL}/highlight/` + id);
}
}
