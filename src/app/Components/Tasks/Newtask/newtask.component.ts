import { Component, inject, OnInit } from '@angular/core';
import { ShowtaskComponent } from "../Showtask/showtask.component";
import { TaskService } from '../../Services/task.service';

@Component({
    selector: 'app-newtask',
    imports: [ShowtaskComponent],
    templateUrl: './newtask.component.html'
})

export class NewtaskComponent implements OnInit {

    newTask: string = '';

    //private taskService: TaskService = inject(TaskService);

    constructor(private taskService: TaskService) {}

    ngOnInit(): void {
        console.log('New task: in OnInit event');
    }

    AddTasks(newTask: string): void{
        this.taskService.AddTask(newTask);
        this.newTask = newTask;
    }

}