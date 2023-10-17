'use client';

import styled from 'styled-components';

export const StatisticContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-main-1);
  padding: 1.6rem;
  border-radius: .8rem;
  border-bottom: .4rem solid var(--color-main-2);
`;

export const StatisticTitle = styled.span`
  font-size: 1.2rem;
  height: 1.6rem;
  color: var(--color-white);
`;

export const StatisticData = styled.span`
  font-size: 4rem;
  height: 4.8rem;
  color: var(--color-white);
`;

export const StatisticDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
`


export const StatisticIconContainer = styled.div`
  color: var(--color-white);
`;