import React from 'react';

import C1 from '../../components/Component1';
import C2 from '../../components/Component2';
import C3 from '../../components/Component3';

import CountProvider from '../../context/Count';
import { useTheme } from '../../context/Theme';

import { Container } from './styles';

function Main() {
  const {theme} = useTheme();

  return (  
    <Container data={ theme }>
        <CountProvider>
          <C1 />
          <C2 />
        </CountProvider>
        <div>
          <C3 />
        </div>
    </Container>
  );
}

export default Main;