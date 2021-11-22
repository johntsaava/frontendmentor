import React from "react";

export const Testimonial = ({ children, className = "", ...props }) => (
  <div
    {...props}
    className={`flex flex-col items-center max-w-xs ${className}`}
  >
    {children}
  </div>
);

export const TestimonialAvatar = ({ className = "", ...props }) => (
  <img {...props} className={`h-14 md:h-20 rounded-full ${className}`} />
);

export const TestimonialDescription = ({
  children,
  className = "",
  ...props
}) => (
  <p
    {...props}
    className={`text-grayish-blue-900 text-sm md:text-base leading-6 text-center md:mt-16 flex-grow ${className}`}
  >
    {children}
  </p>
);

export const TestimonialAuthor = ({
  name,
  position,
  className = "",
  ...props
}) => (
  <div
    {...props}
    className={`flex flex-col items-center mt-7 md:mt-16 ${className}`}
  >
    <span className="text-blue-900 font-display md:text-lg">{name}</span>
    <span className="text-grayish-blue-400 text-xs md:text-sm mt-1">
      {position}
    </span>
  </div>
);
