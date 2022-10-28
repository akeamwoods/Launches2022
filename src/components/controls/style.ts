import styled from 'styled-components';

export const ControlWrapper = styled.div`
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;

  button {
    background: none;
    border: none;
    color: white;
    opacity: 0.6;
    transition-duration: 0.3s;
    cursor: pointer;
  }

  button:hover {
    opacity: 1;
  }
  button:disabled {
    opacity: 0.3;
    cursor: default;
  }
`;
