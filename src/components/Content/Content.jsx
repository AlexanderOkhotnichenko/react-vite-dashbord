import React from 'react';
import "./content.scss";

export function Content({ children, ...props }) {
  return (
   <div {...props}>{children}</div>
  )
}
