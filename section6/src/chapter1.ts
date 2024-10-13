/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: "박진희",
  age: 26,
  position: "QA",
  work() {
    console.log("일 함");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  //생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position); // super 생략하면 오류남.
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("박진희", 26, "QA");
console.log(employeeB);

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
