import React, { useState, useEffect } from 'react';

export default function ({ isActive, onTimeUpdate }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } 
    
    if (!isActive && time !== 0) clearInterval(interval);

    return () => clearInterval(interval);
    
  }, [isActive]);

  useEffect(() => {
    onTimeUpdate(time);
  }, [time, onTimeUpdate]);

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <span>{formatTime(time)}</span>
  );
};
