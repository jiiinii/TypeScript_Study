/**
 *  자바스크립트 클래스
 */

let studentA = {
  name: "박진희",
  age: 18,
  study() {
    console.log(`열공함 뀨`);
  },
  introduce() {
    console.log(`안녕하세요`);
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
  // 메서드
  study() {
    console.log(`열공함 뀨`);
  }

  introduce() {
    console.log(`안녕하세요 ${this.name} 입니당.`);
  }
}

class StudentDevelopter extends Student {
  // 필드
  favoritSkill;

  // 생성자
  constructor(name, grade, age, favoritSkill) {
    super(name, grade, age);
    this.favoritSkill = favoritSkill;
  }

  // 메서드
  programing() {
    console.log(`${this.favoritSkill} 로 프로그래밍 함`);
  }
}

const studentDevelopter = new StudentDevelopter(
  "박진희",
  "B+",
  26,
  "JavaScript"
);

console.log(studentDevelopter);
studentDevelopter.programing();

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
// let studentB = new Student("박진희", "A+", 18);
// console.log(studentB);
// studentB.study();
// studentB.introduce();
