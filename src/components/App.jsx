import data from '../data/data';
import friends from '../data/friends';
import transactions from '../data/transactions';
import user from '../data/user';
import { Heading } from './Heading/Heading.styled';
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
      <Heading marginBottom="50px" textAlign="center">
        // Block 1 //{' '}
      </Heading>
      <Profile user={user} />
      <Heading marginBottom="50px" textAlign="center">
        // Block 2 //{' '}
      </Heading>
      <Statistics title="Upload stats" stats={data} />
      <Heading marginBottom="50px" textAlign="center">
        // Block 3 //{' '}
      </Heading>
      <FriendList friends={friends} />
      <Heading marginBottom="50px" textAlign="center">
        // Block 4 //{' '}
      </Heading>
      <TransactionHistory items={transactions} />
      <GlobalStyleComponent />
    </ThemeProvider>
  );
};
