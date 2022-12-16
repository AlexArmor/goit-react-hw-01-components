import PropTypes from 'prop-types';
import {
  StatisticTitle,
  StatisticsList,
  Item,
  StatisticSection,
} from './Statistics.styled';
import { statColors } from '../../styles/colors';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticSection>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticsList>
        {stats.map(({ id, label, percentage }, index) => {
          const color = statColors[index];
          return (
            <Item key={id} color={color}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </Item>
          );
        })}
      </StatisticsList>
    </StatisticSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
