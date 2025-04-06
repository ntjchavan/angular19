import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  private messageSource = new BehaviorSubject<string>('default value');
  currentMessage$ = this.messageSource.asObservable();

  private ss = new Subject<string>();
  currentss$ = this.ss.asObservable();

  constructor() { }

  UpdateMessage(val: string) {
    this.messageSource.next(val);
  }

  UpdateSubject(data: string) {
    this.ss.next(data);
  }

}
