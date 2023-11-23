'use client';

import { Save } from 'react-feather';

import { AppWrapper } from '@/components/AppWrapper';
import { GradientActionButton } from '@/components/GradientActionButton';
import { FormFieldInput } from '@/components/FormFieldInput';
import { TaskMap } from "@/components/TaskMap";

import {
  
} from './styles';

function RegisterTask() {
  return (
    <AppWrapper backTo="/tasks" title="Cadastrar Colaborador">
    </AppWrapper>
  );
}

export default RegisterTask;