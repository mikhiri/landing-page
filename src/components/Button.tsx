import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  size?: 'default' | 'lg';
  variant?: 'default' | 'outline' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  size = 'default',
  variant = 'default',
  className = '',
  onClick,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-transform hover:scale-105';

  const sizeStyles = {
    default: 'px-6 py-3 text-base',
    lg: 'px-8 py-6 text-lg',
  };

  const variantStyles = {
    default: 'bg-primary text-primary-foreground shadow-soft rounded-full',
    outline: 'border-2 border-primary text-primary bg-transparent rounded-full hover:bg-primary/10',
    secondary: 'bg-secondary text-secondary-foreground shadow-soft rounded-full',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
