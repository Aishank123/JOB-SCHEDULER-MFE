import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from './models/Job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  submitJob(name: string, duration: string): Observable<any> {
    return this.http.post<Job>(`${this.apiUrl}/jobs`, { name, duration });
  }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}/jobs`);
  }

}
