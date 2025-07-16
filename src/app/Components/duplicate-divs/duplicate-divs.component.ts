import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from './duplicate-divs.model';

@Component({
  selector: 'app-duplicate-divs',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './duplicate-divs.component.html',
  styleUrl: './duplicate-divs.component.css'
})
export class DuplicateDivsComponent implements OnInit {
  emp!: Employee;
  originalEmp!: Employee;

  isEditMode = false;

  leftFields: { label: string; path: string; type?: string }[] = [];
  rightFields: { label: string; path: string; type?: string }[] = [];

  ngOnInit(): void {
    this.emp = {
      empId: 101,
      empName: 'John Doe',
      exp: {
        expID: 301,
        companyName: 'TechCorp',
        workedForYear: 5
      },
      edu: {
        eduId: 501,
        schoolName: 'Greenwood High',
        board: 'CBSE'
      }
    };

    this.originalEmp = structuredClone(this.emp);

    this.leftFields = [
      { label: 'Employee ID', path: 'empId', type: 'number' },
      { label: 'Employee Name', path: 'empName' },
      { label: 'Experience ID', path: 'exp.expID', type: 'number' },
      { label: 'Education ID', path: 'edu.eduId', type: 'number' },
      { label: 'School Name', path: 'edu.schoolName' },
      { label: 'Board', path: 'edu.board' }
    ];

    this.rightFields = [
      { label: 'Company Name', path: 'exp.companyName' },
      { label: 'Worked For Year', path: 'exp.workedForYear', type: 'number' }
    ];
  }

  getValue(path: string): any {
    return path.split('.').reduce((o: any, key: string) => o?.[key], this.emp);
  }

  setValue(path: string, value: any): void {
    const keys = path.split('.');
    const lastKey = keys.pop()!;
    const target = keys.reduce((o: any, key: string) => o?.[key], this.emp);
    if (target && lastKey in target) target[lastKey] = value;
  }

  onEdit() {
    this.isEditMode = true;
  }

  onCancel() {
    this.emp = structuredClone(this.originalEmp);
    this.isEditMode = false;
  }

  onSubmit() {
    this.originalEmp = structuredClone(this.emp);
    this.isEditMode = false;
  }
}