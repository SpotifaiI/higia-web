import styled from 'styled-components';

import { sizes } from '../../global/sizes.js';
import { css } from '../../global/styles.js';

export const Container = styled.div`
  min-height: 100vh;
  background-color: var(--color-lighter);
  display: flex;
  flex-direction: column;

  @media (min-width: ${sizes.tablet}) {
    flex-direction: row;
  }
`;

export const LoginContainer = styled.main`
  min-height: 100vh;
  display: flex;

  @media (min-width: ${sizes.tablet}) {
    width: 40%;
  }
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
  display: none;
  width: 100%;
  flex-direction: column;
  gap: .8rem;
  align-items: center;
  justify-content: center;

  @media (min-width: ${sizes.tablet}) {
    display: flex;
  }
`;

export const BrandLogoContainer = styled.div`
  position: relative;
  height: 20rem;
  width: 50%;
`;

export const BrandLogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const BrandName = styled.p`
  font-size: 4rem;
  text-transform: capitalize;
  font-weight: 200;
  color: var(--color-white);

  @media (min-width: ${sizes.laptop}) {
    font-size: 5rem;
  }
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

  @media (min-width: ${sizes.tablet}) {
    display: none;
  }
`;

export const LoginIcon = styled.img`
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