import React from "react";

export const Picture = ({ desktop, mobile, alt, className }) => {
  return (
    <picture>
      <source srcset={desktop} media="(min-width: 768px)" />
      <source srcset={mobile} />
      <img src={desktop} alt={alt} className={className} />
    </picture>
  );
};
