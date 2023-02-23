import React from "react";

export default function BtnSimple({ children, className = "", ...props }) {
  return (
    <button className={`rounded-2xl ${className}`} {...props}>
      {children}
    </button>
  );
}
