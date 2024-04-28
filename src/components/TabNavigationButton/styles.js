import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { css } from '../../global/styles.js';

const activeButtonStyles = `
  color: var(--color-white);
  background: ${css.linearGradient};
`;
const standardButtonStyles = `
  color: var(--color-dark);
`;

export const NavigationButton = styled(Link)`
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s;
  border-radius: 50%;
  ${
    ({ selected }) => selected
      ? activeButtonStyles
      : standardButtonStyles
  }

  &:hover {
    opacity: .4;
  }
`;