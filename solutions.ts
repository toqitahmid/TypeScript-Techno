function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier || multiplier === 0) {
    return value * multiplier;
  }
  return value * 2;
}

function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    if (value) {
      return "Active";
    }
    return "Inactive";
  }
}

type Coordinate = readonly [
  latitude: number,
  longitude: number,
  locationName: string,
];
function formatCoordinate(coordinate: Coordinate): string {
  return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  let populerCourses: Course[] = [];
  for (let course of courses) {
    if (course.isPublished && course.students >= minStudents) {
      populerCourses.push(course);
    }
  }
  return populerCourses;
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  let values: T[K][] = [];
  for (let item of items) {
    values.push(item[key]);
  }

  return values;
}

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  if (age < 18) {
    throw new Error(`Access Denied: Must be 18 or older`);
  }

  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Access Granted");
    }, 1000);
  });
};
