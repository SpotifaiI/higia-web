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

export const LoginContainerWrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const BrandContainer = styled.aside`
  min-height: 100vh;
  background: linear-gradient(to right bottom, #37FC6E, #5A81FA);
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

export const LoginForm = styled.form``;

export const FormFieldContainer = styled.div``;

export const FormFieldLabel = styled.label``;

export const FormField = styled.input``;

export const GradientActionButton = styled.button``;

export const SeparatorContainer = styled.div``;

export const Separator = styled.span``;

export const SeparatorText = styled.p``;

export const IconActionButton = styled.button``;

export const IconActionButtonImageContainer = styled.div`
  position: relative;
`;

export const IconActionButtonImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LoginFooter = styled.footer``;