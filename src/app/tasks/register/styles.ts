'use client';

import styled from 'styled-components';

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
  grid-template-columns: 1fr;
  gap: .8rem;
`;

export const TaskFormFooter = styled.footer`
  display: flex;
  justify-content: end;
`;