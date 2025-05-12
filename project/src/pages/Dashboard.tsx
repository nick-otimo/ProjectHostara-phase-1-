import React, { useState } from 'react';
import { AppLayout } from '../components/layout/AppLayout';
import { useAuth } from '../context/AuthContext';
import { AdminDashboard } from '../components/dashboard/AdminDashboard';
import { BranchManagerDashboard } from '../components/dashboard/BranchManagerDashboard';
import { BusinessAgentDashboard } from '../components/dashboard/BusinessAgentDashboard';
import { ClientDashboard } from '../components/dashboard/ClientDashboard';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();
  
  if (!user) return null;
  
  const renderDashboardByRole = () => {
    switch (user.role) {
      case 'admin':
        return <AdminDashboard />;
      case 'branchManager':
        return <BranchManagerDashboard />;
      case 'businessAgent':
        return <BusinessAgentDashboard />;
      case 'client':
        return <ClientDashboard />;
      default:
        return <div>No dashboard available for this role.</div>;
    }
  };
  
  return (
    <AppLayout>
      {renderDashboardByRole()}
    </AppLayout>
  );
};