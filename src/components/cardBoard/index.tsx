/* eslint-disable prettier/prettier */
import { motion, AnimatePresence } from 'framer-motion';
import { SpaceDataType } from '../../types';
import { Card } from '../card';
import { CardBoardContainer } from './style';

export const CardBoard = ({ direction, cards }) => {
  const handleClick = (spaceData: SpaceDataType) => {
    console.log(spaceData);
  };

  const isRight = direction === 'Right';
  return (
    <AnimatePresence>
      <motion.div key={cards[0].flightNumber} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <CardBoardContainer
          initial={{ x: isRight ? -1000 : 1000, opacity: 0, position: 'absolute' }}
          animate={{ x: 0, opacity: 1, position: 'relative' }}
          exit={{ x: isRight ? 500 : -500, opacity: 0, position: 'absolute', y: 0 }}
          transition={{ duration: 1, damping: 30 }}
        >
          {cards.map((d) => (
            <Card {...d} key={`${d.flightNumber}-${d.missionName}-${d.launchDateUtc}`} onClick={() => handleClick(d)} />
          ))}
        </CardBoardContainer>
      </motion.div>
    </AnimatePresence>
  );
};
