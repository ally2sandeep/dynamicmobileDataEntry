export interface Commodity {
  id: string;
  name: 'Rice' | 'Boiled Rice' | 'Maize' | 'Mirchi';
  bagWeight: number;
}

export interface Miller {
  id: string;
  name: string;
  contactNumber: string;
}

export interface Transaction {
  id: string;
  type: 'IN' | 'OUT';
  timestamp: Date;
  millerId: string;
  commodityId: string;
  numberOfBags: number;
  godownId: string;
  truckNumber: string;
}

export interface Godown {
  id: string;
  name: string;
  capacity: number;
  currentStock: {
    commodityId: string;
    bags: number;
  }[];
} 