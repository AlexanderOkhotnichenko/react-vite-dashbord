import React from 'react';

export function RenderTab({ text, ...props }) {
  return (
    <div {...props}>{text}</div>
  )
}
