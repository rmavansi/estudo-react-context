import React from 'react';

import { useCount } from '../../context/Count';


function Component2() {
  const {count} = useCount(0);

  return (<>
    <span>Mirror: {count}</span>
  </>);
}

export default Component2;