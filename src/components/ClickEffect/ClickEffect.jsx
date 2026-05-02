"use client";

import React, { useState } from "react";

const ClickEffect = () => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      x,
      y,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) =>
        prev.filter((ripple) => ripple.id !== newRipple.id)
      );
    }, 600);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <button
        onClick={handleClick}
        className="relative overflow-hidden px-10 py-4 bg-violet-600 text-white rounded-2xl text-xl font-bold"
      >
        Click Me

        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute rounded-full animate-ping bg-white/40"
            style={{
              left: ripple.x - 10,
              top: ripple.y - 10,
              width: "20px",
              height: "20px",
            }}
          />
        ))}
      </button>
    </div>
  );
};

export default ClickEffect;