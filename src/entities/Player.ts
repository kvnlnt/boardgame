export const PlayerPieces = ['♔', '♕', '♖', '♗', '♘', '♙'];

export interface PlayerProps {
  name: string;
  active: boolean;
  position: number;
  piece: string;
}

export class Player implements PlayerProps {
  name: string = '';
  position: number = 0;
  active: boolean = false;
  piece: string = '';
  constructor({ position, name, active, piece }: PlayerProps) {
    this.name = name;
    this.active = active;
    this.position = position;
    this.piece = piece;
  }
}
