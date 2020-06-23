import { Network } from '../../types';

export default class API {
  url: string = '';

  constructor(network: Network, private address: string) {
    if (network === 'rinkeby') {
      this.url = 'https://api-rinkeby.etherscan.io/api';
    } else if (network === 'mainnet') {
      this.url = 'http://api.etherscan.io/api';
    }
  }

  getAccountBalanceUrl(): string {
    return `${this.url}?module=account&action=balance&address=${this.address}`;
  }

  getAccountTransactionsUrl(): string {
    return `${this.url}?module=account&action=txlist&sort=desc&address=${this.address}`;
  }

  fetchAccountBalance() {
    return fetch(this.getAccountBalanceUrl()).then((res) => res.json());
  }

  fetchAccountTransactions() {
    return fetch(this.getAccountTransactionsUrl()).then((res) => res.json());
  }
}
