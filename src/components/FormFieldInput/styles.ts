'use client';

import styled from 'styled-components';

import { colors } from '@/global/theme';

export const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .4rem;
`;

export const FormFieldLabel = styled.label`
  font-size: 1rem;
  line-height: 1.6rem;
  font-weight: 700;
  color: var(--color-dark);
`;

export const FormField = styled.input`
  height: 4rem;
  border: 0;
  border-radius: .8rem;
  background-color: var(--color-white);
  color: var(--color-dark);
  padding: 0 1.6rem;
  outline-color: ${colors.main1};
`;