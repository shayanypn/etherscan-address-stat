
export type Network = 'rinkeby' | 'mainnet';

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

export interface TransactionsResponseType {
  message: string;
  result: TransactionsType[];
  status: string;
}

export interface BalanceResponseType {
	message: string;
	result: string;
	status: string;
}

export interface StateType {
  balance: string;
  transactions: TransactionsType[];
}
