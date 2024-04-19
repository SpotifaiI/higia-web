import { FormField, FormFieldContainer, FormFieldLabel } from './styles.js';

/**
 * @param {{
 *    label: string
 * } & import('react').InputHTMLAttributes<HTMLInputElement>} props
 *
 * @returns {JSX.Element}
 *
 * @constructor
 */
export function FormFieldInput(props) {
  const { label } = props;

  return (
    <FormFieldContainer>
      <FormFieldLabel>{label}</FormFieldLabel>
      <FormField {...props} />
    </FormFieldContainer>
  );
}