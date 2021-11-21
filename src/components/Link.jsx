import React from "react";

export const Link = ({ children, className = "", ...props }) => (
  <a
    {...props}
    className={`inline-block h-2 rounded-md transition-colors px-1 font-display uppercase text-xs ${className}`}
  >
    <span className="relative bottom-2 inline-block">{children}</span>
  </a>
);
