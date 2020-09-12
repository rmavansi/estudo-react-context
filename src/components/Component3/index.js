import React from 'react';

import { useTheme, themes } from '../../context/Theme';

function Component3() {
  const {theme, setTheme} = useTheme();
  
  function handleClick() {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  }

  return ( 
    <button onClick={handleClick}>Change style</button>
  );
}

export default Component3;