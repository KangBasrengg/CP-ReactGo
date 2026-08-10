import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className,
  icon,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'btn',
        variant === 'primary' ? 'btn-primary' : 'btn-secondary',
        className
      )}
      {...props}
    >
      {children}
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
};
