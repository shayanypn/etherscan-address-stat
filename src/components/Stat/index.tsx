import React from 'react';

interface StatProps {
	balance: string,
	address: string,
}

const Stat: React.FC<StatProps> = ({ balance, address }:StatProps) => {
	return (
		<div>
			<div className="input-group mb-2">
				<div className="input-group-prepend">
					<span className="input-group-text" id="stat-address">Address</span>
				</div>
				<input type="text" className="form-control" aria-describedby="stat-address" />
			</div>
			<div className="input-group mb-2">
				<div className="input-group-prepend">
					<span className="input-group-text" id="stat-balance">Balance</span>
				</div>
				<input type="text" className="form-control" aria-describedby="stat-balance" />
			</div>
		</div>
	);
}

export default Stat;
