import './board.css';
import React from 'react';
import { Dice } from './dice';

export interface BoardProps {
  onRoll: (number: number) => void;
}

export const Board = ({ onRoll }: BoardProps) => (
  <div className="board">
    <div className="board__cell">1</div>
    <div className="board__cell">2</div>
    <div className="board__cell">3</div>
    <div className="board__cell">4</div>
    <div className="board__cell">5</div>
    <div className="board__cell">6</div>
    <div className="board__cell">7</div>
    <div className="board__cell">8</div>
    <div className="board__cell">9</div>
    <div className="board__cell">10</div>
    <div className="board__cell">11</div>
    <div className="board__cell">12</div>
    <div className="board__cell">13</div>
    <div className="board__cell">14</div>
    <div className="board__cell">15</div>
    <div className="board__cell">16</div>
    <div className="board__center">
      <Dice size={50} speed={50} onRoll={onRoll} />
    </div>
  </div>
);
