const STORAGE_NAME = 'esg';

export const validateAddresses = (address:string) => 
   (/^(0x){1}[0-9a-fA-F]{40}$/i.test(address));

export const storeAddresses = (addresses: string[]) => 
   localStorage.setItem(STORAGE_NAME, JSON.stringify(addresses));

export const restoreAddresses = () => {
	try {
		const storage_str = localStorage.getItem(STORAGE_NAME);
		if (storage_str)
			return JSON.parse(storage_str);
	} catch (e) {
		console.error('error while trying to restore storage');
	}
	return [];
}

export interface TransactionsType {
  blockNumber: string;
  timeStamp: string;
  hash: string;
  nonce: string;
  blockHash: string;
  transactionIndex: string;
  from: string;
  to: string;
  value: string;
  gas: string;
  gasPrice: string;
  isError: string;
  txreceipt_status: string;
  input: string;
  contractAddress: string;
  cumulativeGasUsed: string;
  gasUsed: string;
  confirmations: string;
}

export interface BalanceResponseType {
	message: string;
	result: string;
	status: string;
}
