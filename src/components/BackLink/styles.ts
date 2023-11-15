'use client';

import Link from 'next/link';
import styled from 'styled-components';

import { colors } from '@/global/theme';

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