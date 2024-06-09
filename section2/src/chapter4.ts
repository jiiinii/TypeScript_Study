// 타입 별칭(코드 중복 제거)

type User = {
  id: number;
  name: string;
  nickname: string;
  address: string;
  birth: string;
};

// type User = {}; // 동일 scope 내에서 중복 별칭 작성시 오류 발생

// function func() {
//   type User = {}; // function 내에서 작성된 User 라는 type 작성 가능
// }

let user: User = {
  id: 1,
  name: "박진희",
  nickname: "기가지니",
  address: "중랑구",
  birth: "1999.01.04",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "길동씨",
  address: "어딘가",
  birth: "1800.01.04",
};

// 인덱스 시그니쳐
type CountryCodes = {
  [key: string]: string;
  //   Korea: string;
  //   UnitedState: string;
  //   UnitedKingdom: string;
};
let countryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumbers = {
  [key: string]: number;
};
let countryNumberCodes: CountryNumbers = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};

type personalInfo = {
  [key: string]: boolean;
};
let personalInfoAgree: personalInfo = {
  name: true,
  age: true,
  e_mail: false,
  phoneNum: true,
};

type sequence = {
  [key: number]: string;
};
let firstCome: sequence = {
  1: `dog`,
  2: `cat`,
  3: `monkey`,
  4: `elephant`,
};
