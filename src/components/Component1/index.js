import React from 'react';

import { useCount } from '../../context/Count';


function Component1() {
  const {count, setCount} = useCount();

  return (
    <>
      <span>Counter: {count}</span>
      <button onClick={() => setCount(count+1)}>Increment</button>
    </>
  );
}

export default Component1;