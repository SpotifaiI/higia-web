'use client';

import styled from 'styled-components';

import { components, css } from '@/global/styles';

export const GradientButton = styled(components.ActionButton)`
  background: ${css.linearGradient};
  color: var(--color-lighter);
`;