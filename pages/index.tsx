/* eslint-disable prettier/prettier */
import { dehydrate, QueryClient, useQuery } from 'react-query';
import PropertyNormalizerUtility from './../src/util/PropertyNormalizerUtility';
import { Galaxy } from '../src/components/galaxy';
import { Direction, SpaceDataType } from '../src/types';
import { useEffect, useState } from 'react';
import { Controls } from '../src/components/controls';
import { CardBoard } from '../src/components/cardBoard';

const getData = async (offset: number) =>
  PropertyNormalizerUtility.normalize(
    await (await fetch(`https://api.spacexdata.com/v3/launches/?limit=10&offset=${offset}`)).json()
  );

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['spaceData'], () => getData(0));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home() {
  const [offset, setOffset] = useState(0);
  const [direction, setDirection] = useState<Direction>('Left');
  const { isLoading, data, refetch, isFetching } = useQuery<SpaceDataType[]>('spaceData', () => getData(offset));

  useEffect(() => {
    refetch();
  }, [refetch, offset]);

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No data...</div>;

  const handleClickLeft = () => {
    setDirection('Left');
    setOffset(offset - 10);
  };
  const handleClickRight = () => {
    setDirection('Right');
    setOffset(offset + 10);
  };

  const isLeftDisabled = offset <= 0 || isFetching;
  const isRightDisabled = data.length < 10 || isFetching;

  return (
    <>
      <Galaxy />
      <CardBoard direction={direction} cards={data} />
      <Controls
        onClickLeft={handleClickLeft}
        onClickRight={handleClickRight}
        isFetching={isFetching}
        isLeftDisabled={isLeftDisabled}
        isRightDisabled={isRightDisabled}
      />
    </>
  );
}
