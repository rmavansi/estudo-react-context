import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${props => props.data.background};
  color: ${props => props.data.color};
  

  span {
    font-weight: bold;
  }

  button {
      margin: 16px 0;
      padding: 8px;
      border: 1px solid;
      border-radius: 8px;
  }

  div {
    button {
      margin-top: 50px;
    }
  }
`;
