import { InputHTMLAttributes } from 'react';

import {
  FormField,
  FormFieldContainer,
  FormFieldLabel
} from './styles';

export type FormFieldInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function FormFieldInput({
  label,
  ...rest
}: FormFieldInputProps) {
  return (
    <FormFieldContainer>
      <FormFieldLabel>{label}</FormFieldLabel>
      <FormField {...rest} />
    </FormFieldContainer>
  );
}