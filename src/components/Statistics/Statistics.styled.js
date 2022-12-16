import styled from 'styled-components';

export const StatisticSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing(8)};
`;

export const StatisticTitle = styled.h2`
  font-size: ${({ theme }) => theme.spacing(8)};
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(8)};
`;

export const StatisticsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
  gap: ${({ theme }) => theme.spacing(10)};
  padding: ${({ theme }) => theme.spacing(8)};
  font-size: ${({ theme }) => theme.spacing(6)};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ color }) => color};
`;
