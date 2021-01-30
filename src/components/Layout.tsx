import './layout.css';
import React from 'react';

export const Layout = ({ children }) => (
  <div className="layout">{children}</div>
);

export const LayoutBoard = ({ children }) => (
  <div className="layout__board">{children}</div>
);

export const LayoutPlayers = ({ children }) => (
  <div className="layout__players">{children}</div>
);

export const LayoutStatus = ({ children }) => (
  <div className="layout__status">{children}</div>
);
