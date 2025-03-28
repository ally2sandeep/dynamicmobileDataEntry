import React from 'react';
import styled from 'styled-components';
import { Godown } from '../types';

const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const GodownList = styled.div`
  display: grid;
  gap: 15px;
`;

const GodownItem = styled.div`
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 4px;
`;

const GodownOverview: React.FC = () => {
  const [godowns, setGodowns] = React.useState<Godown[]>([]);

  return (
    <Card>
      <Title>Godowns Overview</Title>
      <GodownList>
        {godowns.map(godown => (
          <GodownItem key={godown.id}>
            <h3>{godown.name}</h3>
            <p>Capacity: {godown.capacity} bags</p>
            <p>Current Stock: {godown.currentStock.reduce((acc, curr) => acc + curr.bags, 0)} bags</p>
          </GodownItem>
        ))}
      </GodownList>
    </Card>
  );
};

export default GodownOverview; 