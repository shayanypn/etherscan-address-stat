
type Netowrk = 'rinkeby' | 'mainnet'

export default class API {
  url: string = '';

  constructor(network: Netowrk, private address: string) {
    if (network === 'rinkeby') {
      this.url = 'https://api-rinkeby.etherscan.io/api';
    } else if (network === 'mainnet') {
      this.url = 'http://api.etherscan.io/api';
    }
  }

  getAccountBalanceURL():string {
    return `${this.url}?module=account&action=balance&address=${this.address}`;
  }

  getAccountTransactions():string {
    return `${this.url}?module=account&action=txlist&sort=desc&address=${this.address}`;
  }

  fetchAccountBalance() {
    return fetch(this.getAccountBalanceURL()).then((res) => res.json());
  }

  fetchAccountTransactions() {
    return fetch(this.getAccountTransactions()).then((res) => res.json());
  }
}
