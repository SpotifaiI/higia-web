import { PropsWithChildren } from "react";

import { NavigationBar } from "@/components/NavigationBar";
import {
  Container,
  Content,
  MainTitle,
} from "./styles";

export type AppWrapperProps = {
  title: string;
} & PropsWithChildren;

export function AppWrapper({ title, children }: AppWrapperProps) {
  return (
    <Container>
      <Content>
        <MainTitle>{title}</MainTitle>

        {children}
      </Content>

      <NavigationBar/>
    </Container>
  );
}