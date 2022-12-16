import styled from 'styled-components';

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 150px;
  width: ${({ theme }) => theme.spacing(150)};
  margin: 0 auto;

  padding: 10px 50px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  cursor: pointer;
  transition-property: transform, box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: ${({ theme }) => theme.animation.cubicBezier};
  background-color: ${({ theme }) => theme.colors.white};
  &:hover {
    transform: scale(1.02);
    box-shadow: ${({ theme }) => theme.shadows.small};
  }
`;

export const Avatar = styled.img`
  width: 60px;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadows.regular};
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.large};
  letter-spacing: ${({ theme }) => theme.spacing(0.25)};
  margin-left: ${({ theme }) => theme.spacing(2)};
  margin-bottom: 0;
`;

export const Status = styled.span`
  display: block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${({ status }) => (status ? 'green' : 'red')};
`;
