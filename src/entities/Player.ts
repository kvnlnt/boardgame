export interface PlayerProps {
  name: string;
  active?: boolean;
}

export class Player implements PlayerProps {
  name: string = '';
  active: boolean = false;
  constructor({ name, active }: PlayerProps) {
    this.name = name;
    this.active = active;
  }
}
