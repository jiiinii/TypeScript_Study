/**
 * 제네릭 인터페이스
 *
 * 타입 변수 = 제네릭 파라미터 = 제네릭 타입 변수 = 제네릭 타입 파라미터
 */

interface KeyFair<K, V> {
  key: K;
  value: V;
}

let keypair: KeyFair<string, number> = {
  key: "key",
  value: 0,
};

let keypair2: KeyFair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

/**
 * 인덱스 시그니처
 */

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: 1235,
  key2: -1234,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "key",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "value",
};

/**
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분: 학생 유저 / 개발자 유저
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  if (user.profile.type !== "student") {
    console.log(`잘 못 오셨습니다T.T`);
    return;
  }
  const school = user.profile.school;
  console.log(`${school}로 등교 완료~!`);
}

const developer: User<Developer> = {
  name: "박진희",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const student: User<Student> = {
  name: "박지니",
  profile: {
    type: "student",
    school: "GuriGirlsHighSchool",
  },
};
