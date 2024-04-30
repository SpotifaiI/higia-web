import styled from 'styled-components';

import { sizes } from '../../global/sizes.js';

export const StatisticContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: .8rem;
  border-radius: .8rem;
  scrollbar-width: thin;

  @media (min-width: ${sizes.laptop}){
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const DataList = styled.article`
  width: 100%;
  max-height: 100vh;
`;

export const MapBox = styled.aside`
  width: 100%;
  height: 80vh
`;