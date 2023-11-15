import { LinkProps } from 'next/link';
import { ArrowLeft } from 'react-feather';

import {
  BackLinkButton,
  BackLinkText
} from './styles';

export type BackLinkProps = LinkProps;

export function BackLink({
  ...rest
}: BackLinkProps) {
  return (
    <BackLinkButton {...rest}>
      <ArrowLeft size={32} />

      <BackLinkText>
        Voltar
      </BackLinkText>
    </BackLinkButton>
  );
}