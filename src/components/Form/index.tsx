import React from 'react';
import { validateAddresses } from '../../utils';

interface FormProps {
  onSubmit: any,
}

const Form: React.FC<FormProps> = ({ onSubmit }:FormProps) => {

	const [inputAddress, setInputAddress] = React.useState('');
	const [inputNetwork, setInputNetwork] = React.useState('rinkeby');
	const [isValidAddress, setIsValidAddress] = React.useState(false);
	const [usedAddresses, setUsedAddresses] = React.useState([] as string[]);

	const handleAddressChange = (value:string) => {
		setIsValidAddress(validateAddresses(value));
		setInputAddress(value);
	};

	const handleAddressSelect = (e:any) => {
		const { value } = e.target;
		if(value === '') {return;}

		handleAddressChange(value);
	};

	const handleSubmit = () => {
		if(!isValidAddress || !onSubmit) { return; };

		onSubmit({
			address: inputAddress,
			network: inputNetwork
		});

		setUsedAddresses([inputAddress, ...usedAddresses].slice(0, 5));
		handleAddressChange('');
		setInputNetwork('rinkeby');
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
							value={inputAddress}
							onChange={e => handleAddressChange(e.target.value)}
						/>
					</div>
				</div>
				<div className="form-group col-sm-4">
					<div className="form-group">
						<label htmlFor="select-addresses">Last used address</label>
						<select
							className="form-control"
							id="select-addresses"
							onChange={handleAddressSelect}
							value=""
						>
							<option value="">Select from previous address</option>
							{usedAddresses.map((address, indx) => (<option key={indx} value={address}>{address}</option>))}
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
