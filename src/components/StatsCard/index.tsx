import React from "react";

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
  Icon: React.ReactNode
};

export function StatsCard({
  label,
  value,
  Icon
}: StatsCardProps) {
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
        {Icon}
      </StatisticIconContainer>
    </StatisticContainer>
  );
}