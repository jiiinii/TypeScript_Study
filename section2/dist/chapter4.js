// 타입 별칭(코드 중복 제거)
// type User = {}; // 동일 scope 내에서 중복 별칭 작성시 오류 발생
// function func() {
//   type User = {}; // function 내에서 작성된 User 라는 type 작성 가능
// }
let user = {
    id: 1,
    name: "박진희",
    nickname: "기가지니",
    address: "중랑구",
    birth: "1999.01.04",
};
let user2 = {
    id: 2,
    name: "홍길동",
    nickname: "길동씨",
    address: "어딘가",
    birth: "1800.01.04",
};
let countryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};
let countryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
};
export {};
