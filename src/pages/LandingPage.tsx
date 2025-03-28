import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  padding: 20px;
  
  @media (min-width: 768px) {
    padding: 40px;
  }
  
  @media (min-width: 1024px) {
    padding: 60px;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Dashboard = styled.div`
  display: grid;
  gap: 20px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const LandingPage: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Warehouse Management System</Title>
      </Header>
      <Dashboard>
        <GodownOverview />
        <TransactionHistory />
        <StockStatus />
      </Dashboard>
    </Container>
  );
};

export default LandingPage; 