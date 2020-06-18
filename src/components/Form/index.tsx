import React from 'react';
import { validateAddresses } from '../../utils';

interface FormProps {
  onSubmit: any,
}

const Form: React.FC<FormProps> = ({ onSubmit }:FormProps) => {

	const [inputAddress, setInputAddress] = React.useState('');
	const [inputNetwork, setInputNetwork] = React.useState('rinkeby');
	const [isValidAddress, setIsValidAddress] = React.useState(false);


	const handleAddressChange = (e:any) => {
		const { value } = e.target;
		setIsValidAddress(validateAddresses(value));
		setInputAddress(value);
	};

	const handleSubmit = () => {

		if(!isValidAddress) { return; };

		onSubmit({
			address: inputAddress,
			network: inputNetwork
		});
	};

	return (
		<div>
			<div className="form-row">
				<div className="form-group col-sm-8">
					<div className="form-group">
						<label htmlFor="input-address">Address</label>
						<input
							type="text"
							className={`form-control ${(isValidAddress && inputAddress.length) ? 'is-valid' : ''} ${(!isValidAddress && inputAddress.length) ? 'is-invalid' : ''}`}
							id="input-address"
							name="address"
							onChange={handleAddressChange}
						/>
					</div>
				</div>
				<div className="form-group col-sm-4">
					<div className="form-group">
						<label htmlFor="select-addresses">Last used address</label>
						<select
							className="form-control"
							id="select-addresses"
						>
							<option> Select from previous address</option>
							<option>address 1</option>
							<option>address 2</option>
							<option>address 3</option>
						</select>
					</div>
				</div>
			</div>
			<div className="form-row">
				<div className="form-group col-sm-12">
					<div className="form-group">
						<label htmlFor="select-network">Network</label>
						<select
							className="form-control"
							id="select-network"
							onChange={e => setInputNetwork(e.target.value)}
						>
							<option value="rinkeby">Rinkeby</option>
							<option value="mainnet">Mainnet</option>
						</select>
					</div>
				</div>
			</div>
			<div className="form-row d-flex justify-content-center">
				<div className="form-group col-sm-8">
					<button 
						className="btn btn-primary btn-wide btn-round"
						onClick={handleSubmit}
						>
						Check balance and transaction
					</button>
				</div>
			</div>
		</div>
	);
}

export default Form;
