import React from 'react';
import { StatCard } from './StatsCard';
import { Card } from '../ui/Card';
import { Building2, TrendingUp, AlertCircle, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';

export const BusinessAgentDashboard: React.FC = () => {
  // Mock data for business agent dashboard
  const branchData = [
    { id: 1, name: 'North Region Branch', location: 'Nairobi', status: 'active', performance: 'excellent' },
    { id: 2, name: 'East Region Branch', location: 'Mombasa', status: 'active', performance: 'good' },
    { id: 3, name: 'West Region Branch', location: 'Kisumu', status: 'active', performance: 'average' },
    { id: 4, name: 'South Region Branch', location: 'Nakuru', status: 'pending', performance: 'poor' },
  ];

  const issuesData = [
    { id: 1, branch: 'South Region Branch', issue: 'Payment delays', status: 'critical', date: '2025-03-17' },
    { id: 2, branch: 'West Region Branch', issue: 'Staffing shortage', status: 'moderate', date: '2025-03-15' },
    { id: 3, branch: 'East Region Branch', issue: 'Inventory discrepancy', status: 'minor', date: '2025-03-12' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Business Agent Dashboard</h2>
        <p className="text-gray-600">Monitor and manage all remote branches from this central dashboard.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Branches"
          value="4"
          icon={<Building2 size={24} />}
          color="teal"
        />
        <StatCard
          title="Performance"
          value="82%"
          icon={<TrendingUp size={24} />}
          trend={{ value: 4.3, isPositive: true }}
          color="green"
        />
        <StatCard
          title="Active Issues"
          value="3"
          icon={<AlertCircle size={24} />}
          trend={{ value: 1, isPositive: false }}
          color="red"
        />
        <StatCard
          title="Service Locations"
          value="4"
          icon={<MapPin size={24} />}
          color="blue"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Branch Status">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Branch</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Location</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Performance</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                {branchData.map((branch) => (
                  <tr key={branch.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm">{branch.name}</td>
                    <td className="py-3 px-4 text-sm">{branch.location}</td>
                    <td className="py-3 px-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        branch.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {branch.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        branch.performance === 'excellent' ? 'bg-green-100 text-green-800' : 
                        branch.performance === 'good' ? 'bg-blue-100 text-blue-800' : 
                        branch.performance === 'average' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {branch.performance}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <Button size="sm" variant="outline">View</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        
        <Card title="Issues Requiring Attention">
          <div className="space-y-4">
            {issuesData.map((issue) => (
              <div key={issue.id} className="p-4 border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">{issue.branch}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    issue.status === 'critical' ? 'bg-red-100 text-red-800' : 
                    issue.status === 'moderate' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {issue.status}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-2">{issue.issue}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Reported: {issue.date}</span>
                  <Button size="sm" variant="outline">Resolve</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      
      <Card title="Performance Metrics">
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
          <p className="text-gray-500">Performance chart would display here</p>
        </div>
      </Card>
    </div>
  );
};