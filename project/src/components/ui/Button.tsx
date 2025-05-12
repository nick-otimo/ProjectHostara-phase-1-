import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const buttonVariants = {
  primary: 'bg-blue-700 hover:bg-blue-800 text-white',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
  outline: 'border border-gray-300 hover:bg-gray-100 text-gray-800',
  ghost: 'hover:bg-gray-100 text-gray-800',
  danger: 'bg-red-600 hover:bg-red-700 text-white',
};

const buttonSizes = {
  sm: 'text-xs py-1 px-2',
  md: 'text-sm py-2 px-4',
  lg: 'text-base py-3 px-6',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  className = '',
  leftIcon,
  rightIcon,
  disabled,
  ...props
}) => {
  return (
    <button
      className={`
        ${buttonVariants[variant]} 
        ${buttonSizes[size]} 
        ${fullWidth ? 'w-full' : ''} 
        ${disabled || isLoading ? 'opacity-60 cursor-not-allowed' : ''}
        transition-all duration-200 ease-in-out
        rounded-md font-medium flex items-center justify-center gap-2
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!isLoading && leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};