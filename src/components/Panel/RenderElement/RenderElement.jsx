import React from 'react';

export function RenderElement(props) {
  return (
    <div className={props.className} data-target={props.data}>{props.text}</div>
  )
}
