import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [pos, setPos] = useState({ x: null, y: null });
  const update = (e) => setPos({ x: e.clientX, y: e.clientY });
  useEffect(() => {
    window.addEventListener('mousemove', update);
    return () => window.removeEventListener('mousemove', update);
  }, []);

  return pos;
};

export default useMousePosition;
