import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  private messageSource = new BehaviorSubject<string>('default value');
  currentMessage$ = this.messageSource.asObservable();

  private ss = new Subject<string>();
  currentss$ = this.ss.asObservable();

  constructor(private http: HttpClient) { }

  UpdateMessage(val: string) {
    this.messageSource.next(val);
  }

  UpdateSubject(data: string) {
    this.ss.next(data);
  }

  GetDummyUsers(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }

}
