import styled from 'styled-components';

import { sizes } from '../../global/sizes.js';
import { components } from '../../global/styles.js';
import { colors } from '../../global/theme.js';

export const StatisticContainerListMin = styled.div`
  overflow: auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: .8rem;

  @media (min-width: ${sizes.tablet}) {
    grid-template-columns: 2fr 1fr
  }

  @media (min-width: ${sizes.laptop}) {
    grid-template-columns: 3fr 1fr
  }
`;

export const StatisticContainerList = styled.div`
  overflow: auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: .8rem;
  margin-top: 2rem;

  @media (min-width: ${sizes.tablet}) {
    grid-template-columns: 2fr 1fr 1fr
  }

  @media (min-width: ${sizes.laptop}) {
    grid-template-columns: 2fr 1fr 1fr
  }
`;

export const TaskFormFooterAlign = styled.footer`
  display: flex;
  justify-content: end;
  margin-top: 2rem;
`;

export const DeleteButton = styled(components.ActionButton)`
  background: transparent;
  color: ${colors.danger};
`;