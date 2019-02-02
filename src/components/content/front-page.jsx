import React from "react";
import Typist from 'react-typist';
import styled from "styled-components";

import backdrop from "../../assets/images/backdrop.jpg";
import {font_size, white} from "../../constants";

const Title = styled.h1`
  font-size: ${font_size[0]};
`;

const Name = styled.h1`
  font-size: ${font_size[0]};
`;

const Heading = styled.div`
    padding-left: 10%;
    padding-top: 60vh;
`;

const Background = styled.div`
  background-image: url(${backdrop});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  color: ${white}
`;

export const Frontpgage = () => {
    return (
      <Background>
          <Heading>
              <Typist cursor={{show: false}} avgTypingDelay={10}>
                  <Title>Fullstack developer</Title>
                  <Name>Raslav Milutinovic&lt;rasovica&gt;</Name>
              </Typist>
          </Heading>
      </Background>
    );
};