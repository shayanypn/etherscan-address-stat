import React from 'react';
import { shallow } from 'enzyme';
import Transactions from './index';

const ITEMS_MOCK = [{
    "blockNumber": "6172183",
    "timeStamp": "1584736835",
    "hash": "0xd934011c0bcb0b1c29adbcbfaa5422ee12d1a33ff26c91e03a3065623829dabf",
    "nonce": "603",
    "blockHash": "0xa7459683dd9e7bb019c11c3b8b88b78a27d2bc4456fb2066f1640c1d560b3137",
    "transactionIndex": "1",
    "from": "0xfffa5813ed9a5db4880d7303db7d0cbe41bc771f",
    "to": "0x83ec7b0506556a7749306d69681adbdbd08f0769",
    "value": "1",
    "gas": "34077",
    "gasPrice": "5000000000",
    "isError": "0",
    "txreceipt_status": "1",
    "input": "0x",
    "contractAddress": "",
    "cumulativeGasUsed": "49455",
    "gasUsed": "22718",
    "confirmations": "520520"
}, {
    "blockNumber": "6172172",
    "timeStamp": "1584736670",
    "hash": "0xfb7f489519a37f75d42fd904916abe73d24c96524e220d5d41878df2089a532f",
    "nonce": "602",
    "blockHash": "0xd41e55f1f14595795018e4db5f53771aaaf126c61aac55799e9607c5e907906e",
    "transactionIndex": "2",
    "from": "0xfffa5813ed9a5db4880d7303db7d0cbe41bc771f",
    "to": "0x83ec7b0506556a7749306d69681adbdbd08f0769",
    "value": "2",
    "gas": "34104",
    "gasPrice": "5000000000",
    "isError": "0",
    "txreceipt_status": "1",
    "input": "0x",
    "contractAddress": "",
    "cumulativeGasUsed": "65742",
    "gasUsed": "22718",
    "confirmations": "520531"
}, {
    "blockNumber": "6172161",
    "timeStamp": "1584736505",
    "hash": "0x7205c89eccf9d2b68a520c7353b1bfc97007b2466c749c399e18c995f253d5cd",
    "nonce": "601",
    "blockHash": "0x0674300b151cca798f74480514ade8c0a633a0fde9ce2e127e60a6607e5a19c5",
    "transactionIndex": "2",
    "from": "0xfffa5813ed9a5db4880d7303db7d0cbe41bc771f",
    "to": "0x83ec7b0506556a7749306d69681adbdbd08f0769",
    "value": "3",
    "gas": "34077",
    "gasPrice": "5000000000",
    "isError": "0",
    "txreceipt_status": "1",
    "input": "0x",
    "contractAddress": "",
    "cumulativeGasUsed": "76296",
    "gasUsed": "22718",
    "confirmations": "520542"
}];

describe('Transactions Component', () => {

	test('render', () => {
		const wrapper = shallow(<Transactions />);
		expect(wrapper.exists()).toBe(true);
	});

	test('regression test', () => {
		const wrapper = shallow(<Transactions />);

		expect(wrapper.find('.table').exists()).toBe(true);
		expect(wrapper.find('.thead-light').exists()).toBe(true);
		expect(wrapper.find('tbody > tr').length).toBe(0);
	});

	test('item render', () => {
		const wrapper = shallow(<Transactions />);
		wrapper.setProps({
			items: ITEMS_MOCK
		});

		expect(wrapper.find('tbody > tr').length).toBe(ITEMS_MOCK.length);
		expect(wrapper.find('tbody > tr:first-child td:last-child').text()).toBe('Value: 1 Ether');
		expect(wrapper.find('tbody > tr:last-child td:last-child').text()).toBe('Value: 3 Ether');
	});
});
