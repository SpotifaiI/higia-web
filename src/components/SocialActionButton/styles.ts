'use client';

import Image from 'next/image';
import styled from 'styled-components';

import { components } from '@/global/styles';

export const IconActionButton = styled(components.ActionButton)`
  background-color: var(--color-white);
  color: var(--color-darker);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
`;

export const IconActionButtonImageContainer = styled.div`
  position: relative;
  height: 2rem;
  width: 2rem;
`;

export const IconActionButtonImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;