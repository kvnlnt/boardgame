export interface PlayerProps {
  name: string;
  active?: boolean;
  position: number;
}

export class Player implements PlayerProps {
  name: string = '';
  position: number = 0;
  active: boolean = false;
  constructor({ position, name, active }: PlayerProps) {
    this.name = name;
    this.active = active;
    this.position = position;
  }
}
