import data from '../data/data';
import friends from '../data/friends';
import transactions from '../data/transactions';
import user from '../data/user';
import { Section } from './Section/Section.styled';
import { Heading } from './Heading/Heading.styled';
import { Container } from './Container/Container.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { Profile } from './Profile/Profile';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Section>
        <Container>
          <Heading marginBottom="50px" textAlign="center">
            Block 1
          </Heading>
          <Profile user={user} />
        </Container>
      </Section>
    </ThemeProvider>
  );
};
