import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AboutusService {
    
    constructor() {}

    private studentData: IAboutus[] = [
        {id: 1, name: 'netaji', totalSubject: 4, totalMarks: 375},
        {id: 2, name: 'punam', totalSubject: 4, totalMarks: 348},
        {id: 3, name: 'shivam', totalSubject: 4, totalMarks: 371},
        {id: 4, name: 'pradnya', totalSubject: 4, totalMarks: 389},
        {id: 5, name: 'test', totalSubject: 4, totalMarks: 335},
    ];

    GetStudentData(): IAboutus[] {
        return this.studentData;
    }

    GetObsStudentData(): Observable<IAboutus[]> {
        return of(this.studentData);
    }
}

export interface IAboutus {
    id: number;
    name: string;
    totalSubject: number;
    totalMarks: number;
    avg?: number;
}