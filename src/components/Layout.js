import React from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div`
  padding: 0 120px;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Layout = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;