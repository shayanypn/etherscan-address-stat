
export default class API {
	url: string = '';
	network: string;
	address: string;
	token: string;

	constructor(_network: string, _address: string, _token?: string) {
		this.network = _network;
		this.address = _address;
		this.token = _token || '';

		if (_network === 'rinkeby') {
			this.url = 'https://api-rinkeby.etherscan.io/api';
		} else if (_network === 'mainnet') {
			this.url = 'http://api.etherscan.io/api';
		}
	}

	getAccountBalanceURL() {
		return `${this.url}?module=account&action=balance&address=${this.address}`;
	}

	getAccountTransactions() {
		return `${this.url}?module=account&action=txlist&sort=desc&address=${this.address}`;
	}

	fetchAccountBalance() {
		return fetch(this.getAccountBalanceURL()).then(res => res.json())
	}

	fetchAccountTransactions() {
		return fetch(this.getAccountTransactions()).then(res => res.json())
	}
}