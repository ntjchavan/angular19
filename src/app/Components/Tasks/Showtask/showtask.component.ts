import { Component, OnInit, Input, OnChanges, SimpleChanges, ElementRef,
    AfterContentInit,
    ContentChild
 } from '@angular/core';
import { NgForOf } from '@angular/common';
import { TaskService } from '../../Services/task.service';

@Component({
    selector: 'app-showtask',
    templateUrl: './showtask.component.html',
    imports: [NgForOf]
})

export class ShowtaskComponent implements OnInit, OnChanges, AfterContentInit {
    @Input() newTask!: string;
    @ContentChild('projectedRefPEle') pEle!: ElementRef;

    tasks: string[] = ['task 1', 'task 2', 'task 3'];

    constructor(private taskService: TaskService) {}

    ngOnInit(): void {
        console.log('show task: in oninit event');

        this.taskService.task$.subscribe((t) => {
            console.log('task1: ', t)
        });

        this.taskService.task$.subscribe((t) => {
            console.log('task2: ', t)
        });

        this.taskService.task$.subscribe((task) => {
            this.tasks.push(task);
        });

    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('On changes called...');
        // if(changes["newTask"] && this.newTask) {
        //     this.tasks.push(this.newTask);
        // }
    }

    ngAfterContentInit(): void {
        console.log(this.pEle.nativeElement);
        this.pEle.nativeElement.style.color = 'red';
        this.pEle.nativeElement.style.backgroundColor = 'green';
    }

}