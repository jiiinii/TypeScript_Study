/**
 * partial<T>
 * -> 부분적인, 일부분의
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// type Partial<T> = any;
type Partial<T> = {
  [key in keyof T]?: T[key]; // keyof = 특정 개체 타입으로부터 모든 키를 유니온으로 추측 하는 연산자.
};

const draft: Partial<Post> = {
  // Partial = Post의 모든 프로퍼티를 선택적 프로퍼티로 만드는 유틸리티
  title: "채식주의자",
  content: "초안.",
};

/**
 * Required<T>
 * -> 필수의 , 필수적인
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

type Required<T> = {
  [key in keyof T]-?: T[key];
};

const withThumbnailPost: Required<Post> = {
  title: "한입 타입스크립트 후기",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://inflearn...",
};

withThumbnailPost.title = "하안입";

/**
 * Readonly<T>
 * -> 읽기전용 수정불가
 * -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */

type Readonly<T> = {
  [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글 입니다.",
  tags: [],
  content: "",
};

// readonlyPost.title = ""; // Readonly 형태로 된 상태라 수정이 불가능하다. (오류남)
