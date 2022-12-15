import PropTypes from 'prop-types';
import {
  StatisticTitle,
  StatisticsList,
  Item,
  StatisticSection,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticSection>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id}>
              <span class="label">{label}</span>
              <span class="percentage">{percentage}%</span>
            </Item>
          );
        })}
      </StatisticsList>
    </StatisticSection>
  );
};
