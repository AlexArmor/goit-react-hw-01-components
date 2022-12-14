import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: ${({ theme }) => theme.spacing(100)};
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;

  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(4)};
  background: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 30px;
  transition: background-color ${({ theme }) => theme.animation.cubicBezier}; 

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentLight};
  }
`;

export const Avatar = styled.img`
width: ${({ theme }) => theme.spacing(50)};
margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.dark};
  background-color: ${({ theme }) => theme.colors.white}; 
  transition: transform ${({ theme }) => theme.animation.cubicBezier};
  &:hover{
    transform: scale(1.05);
  }
`;

export const Name = styled.p`
font-size: ${({ theme }) => theme.fontSizes.large};
font-weight: 700;
text-align: center;
margin-bottom: 10px;
`;

export const Tag = styled.p`
font-size: ${({ theme }) => theme.fontSizes.medium};
text-align: center;
margin-bottom: 10px;
`;

export const Location = styled.p`
font-size: ${({ theme }) => theme.fontSizes.medium};
text-align: center;
`;

export const Stats = styled.ul`
list-style: none;
display: flex;
background-color: ${({ theme }) => theme.colors.light};
`;

export const Item = styled.li`
width: 100%;
border: 1px solid ${({ theme }) => theme.colors.grey};
padding: 15px;
text-align: center;
&:nth-child(odd){
  border-left: none;
  border-right: none;
}
`;

export const Label = styled.span`
display: block;
margin-bottom: ${({ theme }) => theme.spacing(2)};;
`;

export const Quantity = styled.span`
display: block;
font-weight: 700;
`;