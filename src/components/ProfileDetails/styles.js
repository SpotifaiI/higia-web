import styled from 'styled-components';

import { colors } from '../../global/theme.js';

export const ProfileDetailsContainer = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  display: flex;
  height:64px;
  padding: 0 20px;
  background-color: ${colors.white};
  border-bottom: 2px solid ${colors.light};
`;

export const ProfileDetailsLabel = styled.span`
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
`;

export const ProfileDetailsData = styled.span`
  font-size: 16px;
  line-height: 24px;
`;