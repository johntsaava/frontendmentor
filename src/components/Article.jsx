import React from "react";

export const Article = ({ children, className = "", ...props }) => (
  <article
    {...props}
    className={`flex flex-col items-center md:items-start max-w-md ${className}`}
  >
    {children}
  </article>
);

export const ArticleTitle = ({ children, className = "", ...props }) => (
  <h2
    {...props}
    className={`max-w-xs text-3xl md:text-4xl font-display text-center md:text-left text-blue-900 ${className}`}
  >
    {children}
  </h2>
);

export const ArticleContent = ({ children, className = "", ...props }) => (
  <p
    {...props}
    className={`mt-5 font-body text-sm md:text-base text-center md:text-left text-grayish-blue-700 ${className}`}
  >
    {children}
  </p>
);

export const ArticleAction = ({ children, className = "", ...props }) => (
  <div {...props} className={`mt-7 ${className}`}>
    {children}
  </div>
);
