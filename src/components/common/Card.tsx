import './card.css';
import React from 'react';

interface CardProps {
  name: string;
  children: React.ReactNode;
}

export const Card = ({ name, children }: CardProps) => (
  <div className="card">
    <div className="card__title">{name}</div>
    <div className="card__body">{children}</div>
  </div>
);
