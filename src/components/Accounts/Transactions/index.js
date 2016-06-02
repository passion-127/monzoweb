import React from 'react';
import Transaction from 'components/Accounts/Transactions/Transaction';
import { intToAmount } from 'lib/utils';

export default class Transactions extends React.Component {
  render() {
    const { props: { transactions, transactionSelect, active } } = this;

    return (
      <ul className="collection with-header" style={{maxHeight: '70vh', overflowY: 'scroll'}}>
        {!transactions.length ? (
          <li className="collection-item grey-text text-lighten-1 center">
            <h5>No transactions found</h5>
          </li>
        ) : (
          transactions.map(transaction => (
              <Transaction
                key={btoa(transaction.id)}
                id={btoa(transaction.id)}
                active={btoa(transaction.id) === active ? true : false}
                transactionSelect={transactionSelect}
                logo={transaction.merchant ? transaction.merchant.logo : ''}
                amount={intToAmount(transaction.amount, transaction.currency)}
                merchant={transaction.merchant ? transaction.merchant.name : transaction.is_load ? 'Mondo' : ''}
                created={transaction.created}
                declinedReason={transaction.decline_reason}
              />
          )).reverse()
        )}
      </ul>
    );
  }
}
