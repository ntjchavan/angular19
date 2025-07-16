export interface Employee {
  empId: number;
  empName: string;
  exp: Experience;
  edu: Education;
}

export interface Experience {
  expID: number;
  companyName: string;
  workedForYear: number;
}

export interface Education {
  eduId: number;
  schoolName: string;
  board: string;
}
