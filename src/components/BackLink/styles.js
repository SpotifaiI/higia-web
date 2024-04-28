import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../global/theme.js';

export const BackLinkButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: .4rem;
  color: ${colors.dark};
  transition: .3s;
  cursor: pointer;

  &:hover {
    opacity: .8;
  }
`;

export const BackLinkText = styled.span`
  font-size: 1.4rem;
`;