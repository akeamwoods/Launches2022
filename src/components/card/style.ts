/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardWrapper = styled(motion.div)`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-family: 'Helvetica', 'Arial', sans-serif;
  cursor: pointer;
  position: relative;
`;

const CardSectionBase = styled.div`
  text-align: center;
`;

export const CardHeader = styled(CardSectionBase)`
  padding: 20px 20px 0 20px;
  h2,
  p {
    margin: 0;
  }
  h2 {
    font-size: 1.3em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const CardFooter = styled(CardSectionBase)`
  padding: 20px;
  color: #fff;
  background: ${(props) => (props.isSuccess ? '#4caf50' : '#f44336')};
  h3 {
    margin: 0;
  }
`;

export const ImageWrapper = styled.div`
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardBack = styled(motion.div)`
  font-size: 0.8em;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  background: ${(props) => (props.isSuccess ? '#4caf50' : '#f44336')};
  p,
  h4 {
    margin: 0;
  }
  p:not(:last-child) {
    margin-bottom: 4px;
  }
`;
