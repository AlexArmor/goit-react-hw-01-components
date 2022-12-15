import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <>
              <tr key={id}>
                <td>Invoice</td>
                <td>125</td>
                <td>USD</td>
              </tr>
              <tr>
                <td>Withdrawal</td>
                <td>85</td>
                <td>USD</td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
};
