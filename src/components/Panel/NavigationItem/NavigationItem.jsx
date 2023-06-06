import React from 'react';

export function NavigationItem({ children, ...props }) {
  return (
    <li {...props}>{children}</li>
  )
}
