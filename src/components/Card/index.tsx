import React from 'react';


interface CardProps {
  children: React.ReactNode,
  className?: string
  isLoading?: boolean,
}

const Card: React.FC<CardProps> = ({ children, className = '', isLoading }:CardProps) => {
	return (
		<div className={`card ${className} ${isLoading ? 'card-loading' : ''}`}>
			<div className="card-body">
				{children}
			</div>
		</div>
	);
}

export default Card;
