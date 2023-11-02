'use client';

import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: var(--color-lighter);
  display: flex;
  flex-direction: column;
`;

export const LoginContainer = styled.main`
  min-height: 100vh;
`;

export const BrandContainer = styled.aside`
  min-height: 100vh;
  background: linear-gradient(to right bottom, #37FC6E, #5A81FA);
`;

export const BrandLogoContainer = styled.div`
  position: relative;
`;

export const BrandLogoImage = styled(Image)``;

export const LoginHeader = styled.header``;

export const LoginIconContainer = styled.div`
  position: relative;
`;

export const LoginIcon = styled(Image)``;

export const LoginTitle = styled.p``;