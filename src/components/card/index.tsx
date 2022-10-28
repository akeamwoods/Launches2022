import Image from 'next/image';
import { format } from 'date-fns';
import { SpaceDataType } from '../../types';
import { motion } from 'framer-motion';
import { CardWrapper, CardHeader, CardFooter, ImageWrapper, CardBack } from './style';
import { useState } from 'react';

export const Card = (cardProps: SpaceDataType & { onClick: () => void }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const {
    missionName,
    launchDateUtc,
    launchSuccess,
    flightNumber,
    launchFailureDetails,
    links: { missionPatch },
    rocket: {
      firstStage: { cores },
      secondStage: { payloads },
    },
    onClick,
  } = cardProps;

  const handleClick = () => {
    setIsFlipped(() => !isFlipped);
    onClick();
  };

  return (
    <CardWrapper whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} onClick={handleClick}>
      <motion.div
        initial={false}
        animate={{ opacity: isFlipped ? 0 : 1, zIndex: isFlipped ? 0 : 3 }}
        transition={{
          type: 'spring',
          duration: 0.4,
        }}
      >
        <CardHeader>
          <h2 title={missionName}>{missionName}</h2>
          <div>{format(new Date(launchDateUtc), 'do MMM yyyy')}</div>
        </CardHeader>
        <ImageWrapper>{missionPatch && <Image src={missionPatch} alt="img" width={55} height={55} />}</ImageWrapper>
        <CardFooter isSuccess={launchSuccess}>
          <h3>{launchSuccess ? 'Success' : 'Failure'}</h3>
        </CardFooter>
      </motion.div>
      <CardBack
        isSuccess={launchSuccess}
        initial={false}
        animate={{ opacity: isFlipped ? 1 : 0, zIndex: isFlipped ? 3 : 0 }}
        transition={{
          type: 'spring',
          duration: 0.4,
        }}
      >
        <h4>Flight number</h4>
        <p>{flightNumber}</p>
        <h4>Core serial</h4>
        <p>{cores[0].coreSerial}</p>
        <h4>Payload id</h4>
        <p>{payloads[0].payloadId}</p>
        <h4>Payload type</h4>
        <p>{payloads[0].payloadType}</p>
        {launchFailureDetails && launchFailureDetails?.reason && (
          <>
            <h4>Failure reason</h4>
            <p>{launchFailureDetails?.reason}</p>
          </>
        )}
      </CardBack>
    </CardWrapper>
  );
};
