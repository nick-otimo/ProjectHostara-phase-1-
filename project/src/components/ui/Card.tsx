import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  footer?: React.ReactNode;
  actions?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  title,
  subtitle,
  footer,
  actions,
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {(title || subtitle || actions) && (
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <div>
            {title && <h3 className="text-lg font-semibold text-gray-800">{title}</h3>}
            {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
          </div>
          {actions && <div className="flex space-x-2">{actions}</div>}
        </div>
      )}
      <div className="p-6">{children}</div>
      {footer && <div className="px-6 py-4 bg-gray-50 border-t">{footer}</div>}
    </div>
  );
};