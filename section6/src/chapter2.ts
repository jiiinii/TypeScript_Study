/**
 * 접근 제어자 = access modifier
 * => 1. public : 가장 기본적인 접근 제어자. 아무것도 제안하지 않음. 외부에서도 접근 가능
 *    2. private : 가장 제안 받는 접근 제어자. 해당 클래스 내부가 아니면 접근이 불가능(에러남). 파생 클래스에서도 접근X
 *    3. protected : 외부에서는 아예 접근 못하도록 막지만, 그래도 파생클래스 내에서는 접근이 가능. public과 private의 중간 역할,,?
 */

class Employee {
  // 필드
  //   public name: string; // public 붙여도 되고 안붙여도 되는, 제약이 없는 것이다.
  //   private age: number; // private은 오류가 발생. 메서드 안에서는 사용 가능. 파생 클래스 내부에서도 사용X
  //   protected position: string;

  // 생성자 : 생성자 매개변수 앞에 접근제어자를 달 경우 필드는 지워준다. 왜냐면, 자동으로 필드도 정의.
  constructor(
    public name: string,
    private age: number,
    protected position: string
  ) {}

  // 메서드
  work() {
    console.log(`${this.age}일 함.`);
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

  func() {
    // this.age; // 오류남. age 속성은 private이며, Employee 내에서만 엑세스 가넝.
    this.position; // protected position;
  }
}

const employee = new Employee("박진희", 26, "developer");
employee.name = "항진이";
// employee.age = 30; // 오류남. age 속성은 private이며, Employee 내에서만 엑세스 가넝.
// employee.position = "디자이너"; // 오류남. age 속성은 protected이며, 파생클래스 메서드 내에서만 엑세스 가넝.

console.log(employee);
