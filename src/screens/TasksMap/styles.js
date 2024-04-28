import styled from 'styled-components';

import { colors } from '../../global/theme.js';
import { sizes } from '../../global/sizes.js';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;
  background: ${colors.light};
  padding: 1.6rem;
  border-radius: 1.6rem;
  margin-bottom: 1.8rem;

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