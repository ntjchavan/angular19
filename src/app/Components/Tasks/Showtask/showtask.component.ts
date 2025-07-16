import { Component, OnInit, Input, OnChanges, SimpleChanges, ElementRef,
    AfterContentInit,
    ContentChild,
    Output,
    EventEmitter
 } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { TaskService } from '../../Services/task.service';
import { filter, first, from, last, map, Observable, of, take, throttleTime } from 'rxjs';

@Component({
    selector: 'app-showtask',
    templateUrl: './showtask.component.html',
    //template: '<table style="color: aqua;"></table>',
    imports: [NgForOf, CommonModule]
})

export class ShowtaskComponent implements OnInit, OnChanges, AfterContentInit {
    @Input() newTask!: string;
    @Output() parentData = new EventEmitter<string>();

    @ContentChild('projectedRefPEle') pEle!: ElementRef;

    tasks: string[] = ['task 1', 'task 2', 'task 3'];
    
    constructor(private taskService: TaskService) {}

    ngOnInit(): void {
        console.log('show task: in oninit event');
        
        this.GetArrayObject();

    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('On changes called...');
        // if(changes["newTask"] && this.newTask) {
        //     this.tasks.push(this.newTask);
        // }
    }

    ngAfterContentInit(): void {
        this.pEle.nativeElement.style.color = 'red';
        this.pEle.nativeElement.style.backgroundColor = 'green';
    }

    SendDataToParent(val: string) {
        this.parentData.emit(val);
    }

    arrObjectObs$!: Observable<any[]>;
    obj: any = [];

    arrStaticData: any[] = [
        {id:1, name: 'test1' },
        {id:2, name: 'test2' },
        {id:3, name: 'test3' },
    ];

    GetArrayObject() {
        this.arrObjectObs$ = this.taskService.GetCollectionData();

        console.log('obs');
        
        // const source$ = from([1, 2, 3, 4, 5]);

        // // Emits the first value
        // source$.pipe(first()).subscribe(console.log); // Output: 1

        const data$ = from(this.arrStaticData);

        data$.subscribe((d) => {console.log(d)});

        data$.pipe(last()).subscribe(d => console.log(d));

    }

}