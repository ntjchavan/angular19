import { CommonModule, CurrencyPipe, NgForOf } from '@angular/common';
import { Component, numberAttribute, OnInit } from '@angular/core';
import { AboutusService, IAboutus } from './aboutus.services';
import { filter, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-aboutus',
  imports: [CommonModule, NgForOf],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent implements OnInit {

  studentData: IAboutus[] = [];
  studentData$: Observable<IAboutus[]> | undefined;

  studentDataAvg: any[] = [];
  studentDataAvg$: Observable<IAboutus[]> | undefined;

  arrObj = [10, 20, 25, 35];
  obsOf = of([[10, 15, 20], [this.arrObj]]);
  //obsOf = of([this.arrObj]);

  arrReduce: number[] = [1, 2, 4, 3, 4, 7, 2];
  arrRedueSum: string = '';

  constructor(private aboutus: AboutusService) {}

  ngOnInit(): void {
    this.GetStudents();
    this.GetStudentAvg();
    this.GetObsStudentAvg();
    this.GetReduceData();
  }

  GetStudents () {
    this.studentData = this.aboutus.GetStudentData();
    console.log(this.studentData);
  }

  GetStudentAvg() {
    this.studentDataAvg = this.aboutus.GetStudentData().map(data => ({
      ...data,
      avg: data.totalMarks / data.totalSubject
    }));
  }

  GetObsStudentAvg() {
    this.studentDataAvg$ = this.aboutus.GetObsStudentData().pipe(
      map(data => 
        data.map(item => ({
          ...item,
          avg: item.totalMarks / item.totalSubject
        }))
      )
    );

    console.log('Observable filter after');
    const filteredData = this.aboutus.GetObsStudentData().pipe(
      map(data => data.filter(item => item.totalMarks > 350))
    );
    filteredData.subscribe(data => {
      console.log(data);
    });
  }

  stud = [
    {id: 1, std: 'first'},
    {id: 2, std: 'first'},
    {id: 3, std: 'second'}
  ];
  GetReduceData() {
    const data = this.arrReduce.reduce((acc, curr) => { return acc + curr }, 0);

    const maxEle = this.arrReduce.reduce((acc, curr) => acc > curr ? acc : curr, 0);
    const minEle = this.arrReduce.reduce((acc, curr) => acc < curr ? acc : curr, 9999);
    
    this.arrRedueSum = `sum of array ele: ${this.arrReduce.join(', ')}, using reduce: ${data}, max element: ${maxEle}, min ele: ${minEle}`;

    console.log(`sum of array ele: ${this.arrReduce.join()}, using reduce: ${data}, max element: ${maxEle}`);

    const groupEle = this.stud.reduce((acc, curr) => {
      (acc[curr.std] = acc[curr.std] || []).push(curr);
      return acc;
    }, {} as {[key: string]: {id: number; std: string}[]});

    console.log('group ele: ', groupEle);
  }

}
