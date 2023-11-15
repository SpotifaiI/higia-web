import { PropsWithChildren } from 'react';

import { BackLink } from '@/components/BackLink';
import { NavigationBar } from '@/components/NavigationBar';
import {
  Container,
  Content,
  GradientSpan,
  MainTitle,
  MainTitleContainer,
  TitleTextContainer
} from './styles';

export type AppWrapperProps = {
  title: string;
  backTo?: string;
} & PropsWithChildren;

export function AppWrapper({
  title,
  backTo,
  children
}: AppWrapperProps) {
  return (
    <Container>
      <Content>
        <MainTitleContainer>
          {
            (backTo)
              ? (<BackLink href={backTo} />)
              : null
          }
          <TitleTextContainer>
            <GradientSpan />
            <MainTitle>{title}</MainTitle>
          </TitleTextContainer>
        </MainTitleContainer>

        {children}
      </Content>

      <NavigationBar/>
    </Container>
  );
}