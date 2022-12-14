import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: ${({ theme }) => theme.spacing(120)};
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;

  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(4)};
  background: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

