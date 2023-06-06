import React from 'react';
import './button.scss';

export function Button({children, ...props}) {
  return (
    <button {...props}>{children}</button>
  )
}