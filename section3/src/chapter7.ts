/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입 -> 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기.
 */

type Person = {
  name: string;
  age: number;
};

// value 값이 number 타입이면, toFixed의 메서드를 적용한 값을 출력하도록 할 것임
// value 값이 string 타입이면, toUpperCase 메서드를 적용한 값을 출력하도록 할 것임
// value 값이 Date 타입이면, getTime 메서드를 적용한 값을 출력하도록 할 것임
// value 값이 Person 타입이면, 'name은 age살입니다.' 를 출력
function func(value: number | string | Date | null | Person) {
  // value의 타입으로는 num or str이 들어올 수 있도록.
  // 타입 가드.
  if (typeof value === "number") {
    // number타입으로 범위가 좁혀져서, number 타입임이 보장이 됨.
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    // Date = js의 내장 클래스
    // 왼쪽에 있는 값이 오른쪽의 인스턴스인가?
    // instanceof = ex) A instanceof B,, A가 B 객채인가?
    console.log(value.getDate());
  } else if (value && "age" in value) {
    // Person은 js의 내장 클래스가 아니라서 instanceof 쓰면 오류남.
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
