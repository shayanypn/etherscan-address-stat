import React from 'react';

interface CardProps {
  className?: string;
  isLoading?: boolean;
  noPadding?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  isLoading,
  noPadding = false,
}) => {
  return (
    <div className={`card ${className} ${isLoading ? 'card-loading' : ''}`}>
      <div className={`card-body ${noPadding ? 'p-0' : ''}`}>{children}</div>
    </div>
  );
};

export default Card;
