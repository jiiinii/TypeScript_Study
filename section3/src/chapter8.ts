/**
 * 서로소 유니온 타입
 * = 교집합이 없는 타입들로만 만든 유니온 타입을 말함.
 * 사례 1.
 */

// 웹서비스의 간단한 회원관리 기능 만들기
// 관리자
type Admin = {
  tag: "Admin";
  name: string;
  kickCount: number; // 지금까지 강퇴시킨 회원수
};

// 일반회원
type Member = {
  tag: "Member";
  name: string;
  point: number; // 마일리지
};

// 아직 가입하지 않은 회원
type Guest = {
  tag: "Guest";
  name: string;
  visitCount: number; // 방문횟수
};

type User = Admin | Member | Guest;

// Admin --> {name}님 현재까지 {kickCount}번 강퇴했습니다.
// Member --> {name}님 현재까지 {point} 모았습니다.
// Guest --> {name}님 현재까지 {visitCount}번 방문하셨습니다.
function login(user: User) {
  switch (user.tag) {
    case "Admin": {
      console.log(`${user.name}님 현재까지 ${user.kickCount}번 강퇴했습니다.`);
      break;
    }
    case "Member": {
      console.log(`${user.name}님 현재까지 ${user.point}번 모으셨습니다.`);
      break;
    }
    case "Guest": {
      console.log(
        `${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`
      );
      break;
    }
  }
  //   if (user.tag === "Admin") {
  //     // Admin 타입
  //     console.log(`${user.name}님 현재까지 ${user.kickCount}번 강퇴했습니다.`);
  //   } else if (user.tag === "Member") {
  //     // Member 타입
  //     console.log(`${user.name}님 현재까지 ${user.point}번 모으셨습니다.`);
  //   } else {
  //     // Guest 타입
  //     console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
  //   }
}

/**
 * 사례 2.
 */

// 비동기 작업의 결과를 처리하는 객체

type LOADING = {
  state: "LOADING";
};

type FAILED = {
  state: "FALIED";
  error: {
    message: "오류 발생 원인은,,,";
  };
};

type SUCCESS = {
  state: "SUCCESS";
  response: {
    data: "데이터 출력.";
  };
};

type AsyncTask = LOADING | FAILED | SUCCESS;

// 로딩중 --> 콘솔에 로딩중 출력
// 실패 --> 실패: 에러메세지 출력
// 성공 --> 성공: 데이터 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩 중,,");
      break;
    }
    case "FALIED": {
      console.log(`에러 발생: ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공: ${task.response.data}`);
      break;
    }
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FALIED",
  error: {
    message: "오류 발생 원인은,,,",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터 출력.",
  },
};
