import styled from 'styled-components';

import { css } from '../../global/styles.js';

export const StatisticContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem;
  border-radius: .8rem;
  background: ${css.linearGradient};
`;

export const StatisticTitle = styled.span`
  font-size: 1rem;
  height: 1.6rem;
  color: var(--color-white);
`;

export const StatisticData = styled.span`
  font-size: 3.5rem;
  height: 4.8rem;
  color: var(--color-white);
`;

export const StatisticDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
`;

export const StatisticIconContainer = styled.div`
  color: var(--color-white);
`;