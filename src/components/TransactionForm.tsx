import React from 'react';
import styled from 'styled-components';
import { Transaction, Miller, Commodity, Godown } from '../types';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 500px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: #0056b3;
  }
`;

interface TransactionFormProps {
  onSubmit: (transaction: Omit<Transaction, 'id' | 'timestamp'>) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({
    type: 'IN',
    millerId: '',
    commodityId: '',
    numberOfBags: 0,
    godownId: '',
    truckNumber: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Transaction Type</Label>
        <Select
          value={formData.type}
          onChange={e => setFormData({...formData, type: e.target.value as 'IN' | 'OUT'})}
        >
          <option value="IN">Incoming</option>
          <option value="OUT">Outgoing</option>
        </Select>
      </FormGroup>
      
      <FormGroup>
        <Label>Truck Number</Label>
        <Input
          type="text"
          value={formData.truckNumber}
          onChange={e => setFormData({...formData, truckNumber: e.target.value})}
          required
        />
      </FormGroup>
      
      <FormGroup>
        <Label>Number of Bags</Label>
        <Input
          type="number"
          value={formData.numberOfBags}
          onChange={e => setFormData({...formData, numberOfBags: parseInt(e.target.value)})}
          required
        />
      </FormGroup>
      
      <Button type="submit">Record Transaction</Button>
    </Form>
  );
};

export default TransactionForm; 