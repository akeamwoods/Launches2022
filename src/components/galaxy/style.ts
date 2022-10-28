/* eslint-disable prettier/prettier */

import styled from 'styled-components';

// Background from here: https://codepen.io/jensaxena/pen/KQmvoK

export const SpaceBase = styled.div`
background: radial-gradient(circle at bottom, navy 0, black 100%);
height: 100%;
width:100%;
position:fixed;
overflow: scroll;
top:0;
left:0;
z-index:-1;
}
`;

const StarBase = styled.div`
  background: rgba(128, 0, 128, 0.1) center / 200px 200px round;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const StarsLayerOne = styled(StarBase)`
  background-image: radial-gradient(1px 1px at 25px 5px, white, rgba(255, 255, 255, 0)),
    radial-gradient(1px 1px at 50px 25px, white, rgba(255, 255, 255, 0)),
    radial-gradient(1px 1px at 125px 20px, white, rgba(255, 255, 255, 0)),
    radial-gradient(1.5px 1.5px at 50px 75px, white, rgba(255, 255, 255, 0)),
    radial-gradient(2px 2px at 15px 125px, white, rgba(255, 255, 255, 0)),
    radial-gradient(2.5px 2.5px at 110px 80px, white, rgba(255, 255, 255, 0));
`;
export const StarsLayerTwo = styled(StarBase)`
  background-image: radial-gradient(1px 1px at 75px 125px, white, rgba(255, 255, 255, 0)),
    radial-gradient(1px 1px at 100px 75px, white, rgba(255, 255, 255, 0)),
    radial-gradient(1.5px 1.5px at 199px 100px, white, rgba(255, 255, 255, 0)),
    radial-gradient(2px 2px at 20px 50px, white, rgba(255, 255, 255, 0)),
    radial-gradient(2.5px 2.5px at 100px 5px, white, rgba(255, 255, 255, 0)),
    radial-gradient(2.5px 2.5px at 5px 5px, white, rgba(255, 255, 255, 0));
`;
export const StarsLayerThree = styled(StarBase)`
  background-image: radial-gradient(1px 1px at 10px 10px, white, rgba(255, 255, 255, 0)),
    radial-gradient(1px 1px at 150px 150px, white, rgba(255, 255, 255, 0)),
    radial-gradient(1.5px 1.5px at 60px 170px, white, rgba(255, 255, 255, 0)),
    radial-gradient(1.5px 1.5px at 175px 180px, white, rgba(255, 255, 255, 0)),
    radial-gradient(2px 2px at 195px 95px, white, rgba(255, 255, 255, 0)),
    radial-gradient(2.5px 2.5px at 95px 145px, white, rgba(255, 255, 255, 0));
`;
