import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardBoardContainer = styled(motion.div)`
  padding: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  column-gap: 30px;
  row-gap: 40px;
  max-width: 1080px;
  margin: 0 auto;
  z-index: 3;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
