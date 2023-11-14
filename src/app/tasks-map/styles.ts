'use client';

import styled from "styled-components";
import { sizes } from '@/global/sizes';
import { colors } from '@/global/theme';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;
  background: ${colors.light};
  padding: 1.6rem;
  border-radius: 1.6rem;

    @media (min-width: ${sizes.laptop}) {
      flex-direction: row;

    & > button {
      align-self: flex-end;
      height: 4rem;
    }
  }
`;


export const SearchFieldsGroup = styled.section`
  display: flex;
  flex-direction: column;
  gap: .8rem;

  @media (min-width: ${sizes.tablet}) {
    flex-direction: row;

    & > * {
      flex: 1;
    }
  }

    @media (min-width: ${sizes.laptop}) {
      width: 100%;
    }

`;

export const MapLayout = styled.main`
  height: 100%;
  width: 100vh;
  position: relative;
`;
