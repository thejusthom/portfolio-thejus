import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  margin-bottom: 120px;
  opacity: 0;
  animation: fadeIn 0.4s ease forwards;
  
  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1.5rem;
`;

const ViewButton = styled.a`
  color: #007AFF;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ProjectCard = ({ title, description, link, linkText }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ViewButton href={link}>{linkText}</ViewButton>
    </Card>
  );
};

export default ProjectCard;