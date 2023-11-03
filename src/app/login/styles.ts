'use client';

import Image from 'next/image';
import styled from 'styled-components';

import { css } from '@/global/styles';

export const Container = styled.div`
  min-height: 100vh;
  background-color: var(--color-lighter);
  display: flex;
  flex-direction: column;
`;

export const LoginContainer = styled.main`
  min-height: 100vh;
`;

export const LoginContainerWrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const BrandContainer = styled.aside`
  min-height: 100vh;
  background: ${css.linearGradient};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BrandLogoContainer = styled.div`
  position: relative;
  height: 10rem;
  width: 50%;
`;

export const BrandLogoImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const LoginHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.6rem 0;
`;

export const LoginIconContainer = styled.div`
  position: relative;
  height: 4.8rem;
  width: 4.8rem;
`;

export const LoginIcon = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LoginTitle = styled.p`
  font-size: 1.6rem;
  line-height: 2rem;
  color: var(--color-darker);
  font-weight: 700;
  text-align: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin: 1.6rem 0;
`;

export const SeparatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.6rem 0;
`;

export const Separator = styled.span`
  width: 40%;
  height: .1rem;
  background-color: var(--color-dark);
`;

export const SeparatorText = styled.p`
  color: var(--color-dark);
  font-size: 1.2rem;
  line-height: 1.6rem;
  font-weight: 700;
`;

export const LoginFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: .8rem;
  margin: 1.6rem 0;
`;