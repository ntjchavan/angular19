import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

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

    val: any[] = [];
    GetCollectionData(): Observable<any[]> {
        this.val = [
            { id: 1, name: 'netaji', age: 35 },
            { id: 2, name: 'punam', age: 26 },
            { id: 3, name: 'shivam', age: 17 },
            { id: 4, name: 'pradnya', age: 13 },
            { id: 5, name: 'test', age: 8 },
        ]

        return of(this.val);
    }

}