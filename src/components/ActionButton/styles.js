import styled from 'styled-components';

import { components, css } from '../../global/styles.js'

export const MainButton = styled(components.ActionButton)`
  font-weight: 700;
  color: var(--color-lighter);
  background: ${css.linearGradient};
`;