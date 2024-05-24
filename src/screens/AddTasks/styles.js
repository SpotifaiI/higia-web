import styled from 'styled-components';

import { sizes } from '../../global/sizes.js';
import { colors } from '../../global/theme.js';

export const TaskFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const TaskForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

export const TaskFormRow = styled.div`
  display: grid;
  gap: .8rem;
`;

export const TaskFormRowGeneral = styled(TaskFormRow)`
  @media (min-width: ${sizes.tablet}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media (min-width: ${sizes.laptop}) {
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

export const TaskFormRowAddress = styled(TaskFormRow)`
  @media (min-width: ${sizes.tablet}) {
    grid-template-columns: 2fr 8fr;
    grid-template-rows: 1fr 1fr;
  }

  @media (min-width: ${sizes.laptop}) {
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr;
  }
`;

export const TaskFormRowRef = styled(TaskFormRow)``;

export const TaskFormRowLocation = styled(TaskFormRow)`
  @media (min-width: ${sizes.tablet}) {
    grid-template-columns: 2fr 8fr;
    grid-template-rows: 1fr 1fr;
  }

  @media (min-width: ${sizes.laptop}) {
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr;
  }
`;

export const TaskFormFooter = styled.footer`
  display: flex;
  justify-content: end;
`;

export const MapBox = styled.aside`
  width: 100%;
  height: 40vh
`;

export const PriorityInputContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  overflow: auto;
`;

export const PriorityInputLabel = styled.span`
  font-size: 1rem;
  line-height: 1.6rem;
  font-weight: 700;
  color: var(--color-dark);
`;

export const PriorityInputGroup = styled.div`
  display: flex;
  gap: .4rem;
`;

export const PriorityInput = styled.button`
  height: 3.2rem;
  border: 0;
  padding: 0 1.6rem;
  border-radius: .4rem;
  font-size: 1.2rem;
  line-height: 2.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: .3s;

  &:hover {
    opacity: .8;
  }
`;

export const PriorityInputLow = styled(PriorityInput)`
  background-color: ${props => props.selected ? colors.p1 : 'transparent'};
  color: ${props => props.selected ? colors.lighter : colors.p1};
`;

export const PriorityInputMedium = styled(PriorityInput)`
  background-color: ${props => props.selected ? colors.p2 : 'transparent'};
  color: ${props => props.selected ? colors.darker : colors.p2};
`;

export const PriorityInputHigh = styled(PriorityInput)`
  background-color: ${props => props.selected ? colors.p3 : 'transparent'};
  color: ${props => props.selected ? colors.lighter : colors.p3};
`;