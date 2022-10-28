/* eslint-disable prettier/prettier */
import { FaRocket, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { ControlWrapper } from './style';
import { motion } from 'framer-motion';

export const Controls = ({ onClickLeft, onClickRight, isFetching, isLeftDisabled, isRightDisabled }) => {
  return (
    <ControlWrapper>
      <button disabled={isLeftDisabled} onClick={onClickLeft} data-cy="left-button">
        <FaChevronLeft size={32} />
      </button>
      {isFetching ? (
        <motion.div
          animate={{
            scale: [1, 1.2, 0.8],
            rotate: 360,
          }}
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        >
          <FaRocket size={24} />
        </motion.div>
      ) : (
        <div>
          <FaRocket size={24} />
        </div>
      )}
      <button disabled={isRightDisabled} onClick={onClickRight}>
        <FaChevronRight size={32} />
      </button>
    </ControlWrapper>
  );
};
