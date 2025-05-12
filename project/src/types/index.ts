export type UserRole = 'admin' | 'branchManager' | 'businessAgent' | 'client';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Business {
  id: string;
  name: string;
  type: 'hotel' | 'restaurant' | 'laundry' | 'textile';
  location: string;
  branchManagerId: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  read: boolean;
  date: Date;
  type: 'info' | 'warning' | 'error' | 'success';
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image?: string;
}

export interface Order {
  id: string;
  clientId: string;
  clientName: string;
  items: {
    id: string;
    name: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  date: Date;
}