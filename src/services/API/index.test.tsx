import API from './index';

describe('API tool', () => {

	test('initial work', () => {
		const Api = new API('rinkeby', '123');

		expect(Api.network).toBe('rinkeby');
		expect(Api.address).toBe('123');
	});

	test('url prepare correctly', () => {
		const Api = new API('rinkeby', '123');

		expect(Api.getAccountBalanceURL()).toBe('https://api-rinkeby.etherscan.io/api?module=account&action=balance&address=123');
		expect(Api.getAccountTransactions()).toBe('https://api-rinkeby.etherscan.io/api?module=account&action=txlist&sort=desc&address=123');
	});

	test('url prepare correctly second test', () => {
		const Api = new API('mainnet', 'abc');

		expect(Api.getAccountBalanceURL()).toBe('http://api.etherscan.io/api?module=account&action=balance&address=abc');
		expect(Api.getAccountTransactions()).toBe('http://api.etherscan.io/api?module=account&action=txlist&sort=desc&address=abc');
	});
});
