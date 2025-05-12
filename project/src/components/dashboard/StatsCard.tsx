import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: 'blue' | 'teal' | 'orange' | 'purple' | 'red' | 'green';
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  trend,
  color = 'blue',
}) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-700',
    teal: 'bg-teal-50 text-teal-700',
    orange: 'bg-orange-50 text-orange-700',
    purple: 'bg-purple-50 text-purple-700',
    red: 'bg-red-50 text-red-700',
    green: 'bg-green-50 text-green-700',
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-2xl font-semibold mt-1">{value}</p>
          </div>
          
          <div className={`${colorClasses[color]} p-3 rounded-full`}>
            {icon}
          </div>
        </div>
        
        {trend && (
          <div className="mt-3 flex items-center">
            <span className={`${trend.isPositive ? 'text-green-500' : 'text-red-500'} text-sm font-medium flex items-center`}>
              {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
            </span>
            <span className="text-gray-500 text-sm ml-1">from last month</span>
          </div>
        )}
      </div>
    </div>
  );
};