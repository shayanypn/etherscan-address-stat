import React from 'react';


interface CardProps {
  children: React.ReactNode,
  className?: string
  isLoading?: boolean,
  noPadding?: boolean
}

const Card: React.FC<CardProps> = ({ children, className = '', isLoading, noPadding = false }:CardProps) => {
	return (
		<div className={`card ${className} ${isLoading ? 'card-loading' : ''}`}>
			<div className={`card-body ${noPadding ? 'p-0' : ''}`}>
				{children}
			</div>
		</div>
	);
}

export default Card;
