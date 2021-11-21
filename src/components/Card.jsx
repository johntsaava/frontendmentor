import React from "react";

export const Card = ({ children, className = "", ...props }) => (
  <div {...props} className={`relative ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className = "", ...props }) => (
  <div className="absolute bottom-0 left-0 right-0">
    <div
      {...props}
      className={`max-w-sm px-5 py-10 md:py-12 mx-auto ${className}`}
    >
      {children}
    </div>
  </div>
);

export const CardTitle = ({ children, className = "", ...props }) => (
  <div
    {...props}
    className={`font-display text-2xl md:text-4xl text-center ${className}`}
  >
    {children}
  </div>
);

export const CardDescription = ({ children, className = "", ...props }) => (
  <div
    {...props}
    className={`text-center text-sm md:text-base mt-4 md:mt-7 ${className}`}
  >
    {children}
  </div>
);
