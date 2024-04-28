import styled from 'styled-components';

import { components, css } from '../../global/styles.js';

export const GradientButton = styled(components.ActionButton)`
  background: ${css.linearGradient};
  color: var(--color-lighter);
`;