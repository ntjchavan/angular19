import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class TaskService {

    private task = new Subject<string>();
    task$ = this.task.asObservable();

    AddTask(task: string) {
        console.log(`task added in server: ${task}`);
        this.task.next(task);
    }

}