import { validateAddresses } from './index';

describe('validateAddresses tool', () => {

	test('valid item', () => {
		expect(validateAddresses('0xb3775fb83f7d12a36e0475abdd1fca35c091efbe')).toEqual(true);
	});

	test('invalid length', () => {
		expect(validateAddresses('0xb3775fb83f7d12a36e0475abdd1fca35c091efb')).toEqual(false);
	});

	test('invalid address', () => {
		expect(validateAddresses('0xb3775fb83f7d12a36e0475abdd1fca35c091efbe2')).toEqual(false);
	});
});
