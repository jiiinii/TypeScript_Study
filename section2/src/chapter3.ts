// 1.
let user: {
  // 구조적 타입 시스템 =  Property based type system
  id?: number; // 물음표가 붙은것 = 이 프로퍼티가 있어도 되고 없어도 되는것(Optional property).
  name: string;
} = {
  id: 1,
  name: "박진희",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "코코",
  color: "white",
};

user = {
  name: "홍길동",
};

// 2.
let config: {
  readonly apiKey: string; // readonly = propery의 값을 바꾸는 걸 막아주는 행위
} = {
  apiKey: "MY_API_KEY",
};
