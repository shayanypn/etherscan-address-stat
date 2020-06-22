import React from 'react';
import Moment from 'react-moment';
import { TransactionsType } from './../../types';

interface TransactionsProps {
  className?: string;
  items: Array<TransactionsType>;
}

const Transactions: React.FC<TransactionsProps> = ({
  className = '',
  items = [],
}) => {
  return (
    <table className={`table ${className}`}>
      <thead className="thead-light">
        <tr>
          <th scope="col" colSpan={4}>
            Last 10 transactions
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((transaction: TransactionsType) => (
          <tr key={transaction.blockNumber}>
            <td>
              <p className="tb-address">
                Hash{' '}
                <a
                  href={`https://etherscan.io/tx/${transaction.blockHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {transaction.blockHash}
                </a>
              </p>
              Block:{' '}
              <a
                href={`https://etherscan.io/block/${transaction.blockNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {transaction.blockNumber}
              </a>
            </td>
            <th scope="row">
              <span
                className={`badge badge-${
                  transaction.isError === '0' ? 'success' : 'danger'
                }`}
              >
                {transaction.isError === '0' ? 'Success' : 'Rejected/Cancelled'}
              </span>
              <br />
              <small>
                <Moment fromNow unix>
                  {transaction.timeStamp}
                </Moment>
              </small>
            </th>
            <td>
              <p className="tb-address">
                From{' '}
                <a
                  href={`https://etherscan.io/address/${transaction.from}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {transaction.from}
                </a>
              </p>
              <p className="tb-address">
                To{' '}
                <a
                  href={`https://etherscan.io/address/${transaction.to}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {transaction.to}
                </a>
              </p>
            </td>
            <td>Value: {transaction.value} Ether</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Transactions;
