import { PropsWithChildren } from "react";

import { NavigationBar } from "@/components/NavigationBar";
import {
  Container,
  Content,
  GradientSpan,
  MainTitle,
  MainTitleContainer
} from "./styles";

export type AppWrapperProps = {
  title: string;
} & PropsWithChildren;

export function AppWrapper({ title, children }: AppWrapperProps) {
  return (
    <Container>
      <Content>
        <MainTitleContainer>
          <GradientSpan />
          <MainTitle>{title}</MainTitle>
        </MainTitleContainer>

        {children}
      </Content>

      <NavigationBar/>
    </Container>
  );
}