// components/Introduction.js
import React from 'react';
import styled from 'styled-components';

const IntroSection = styled.section`
  margin: 120px 0;
`;

const Greeting = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #007AFF;
`;

const Bio = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 660px;
`;

const Introduction = () => {
  return (
    <IntroSection>
      <Greeting>Hi there</Greeting>
      <Bio>
        I'm a developer and designer specializing in creating modern web applications. 
        My work focuses on building intuitive user interfaces with clean, efficient code.
      </Bio>
    </IntroSection>
  );
};

export default Introduction;