/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  // 해당 interface 밑의 매개변수 모두 public
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!!`);
  }
}
