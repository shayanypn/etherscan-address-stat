import API from './index';

describe('API tool', () => {
  test('url prepare correctly', () => {
    const Api = new API('rinkeby', '123');

    expect(Api.getAccountBalanceUrl()).toBe(
      'https://api-rinkeby.etherscan.io/api?module=account&action=balance&address=123'
    );
    expect(Api.getAccountTransactionsUrl()).toBe(
      'https://api-rinkeby.etherscan.io/api?module=account&action=txlist&sort=desc&address=123'
    );
  });

  test('url prepare correctly second test', () => {
    const Api = new API('mainnet', 'abc');

    expect(Api.getAccountBalanceUrl()).toBe(
      'http://api.etherscan.io/api?module=account&action=balance&address=abc'
    );
    expect(Api.getAccountTransactionsUrl()).toBe(
      'http://api.etherscan.io/api?module=account&action=txlist&sort=desc&address=abc'
    );
  });
});
