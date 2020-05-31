import React from 'react';

const Modify = (WrappedComponent) => {
  const color = ['red', 'blue', 'pink', 'orange'];
  const col = color[Math.ceil(Math.random() * 4)];
  const text_color = col + '-text';
  return (props) => {
    return (
      <div className={text_color}>
        <WrappedComponent {...props} />
      </div>
    )
  }
}

export default Modify;