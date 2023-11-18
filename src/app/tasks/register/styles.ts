'use client';

import styled from 'styled-components';
import {sizes} from "@/global/sizes";

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