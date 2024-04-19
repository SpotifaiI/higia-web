import {
  StatisticContainer,
  StatisticDataContainer,
  StatisticTitle,
  StatisticData, StatisticIconContainer,
} from './styles.js';

/**
 * @param {{
 *    label: string,
 *    value: string|number,
 *    icon: import('react-feather').Icon
 * }} props
 *
 * @returns {JSX.Element}
 *
 * @constructor
 */
export function StatsCard(props) {
  const { label, icon: CardIcon, value } = props;
  const statisticIconSize = 56;

  return (
    <StatisticContainer>
      <StatisticDataContainer>
        <StatisticTitle>
          {label}
        </StatisticTitle>
        <StatisticData>
          {value}
        </StatisticData>
      </StatisticDataContainer>
      <StatisticIconContainer>
        <CardIcon size={statisticIconSize} />
      </StatisticIconContainer>
    </StatisticContainer>
  );
}