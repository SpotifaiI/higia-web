import React from "react";
import { Icon } from "react-feather";

import {
  StatisticContainer,
  StatisticData,
  StatisticDataContainer,
  StatisticIconContainer,
  StatisticTitle
} from "./styles";

export type StatsCardProps = {
  label: string;
  value: string|number;
  Icon: Icon
};

export function StatsCard({
  label,
  value,
  Icon: CardIcon
}: StatsCardProps) {
  const statisticIconSize = 80;

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