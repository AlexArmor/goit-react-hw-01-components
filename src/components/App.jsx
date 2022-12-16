import data from '../data/data';
import friends from '../data/friends';
import transactions from '../data/transactions';
import user from '../data/user';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { GlobalStyleComponent } from '../styles/GlobalStyles';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyleComponent />
    </ThemeProvider>
  );
};
