import { BackLink } from '../BackLink/index.jsx';
import { NavigationBar } from '../NavigationBar/index.jsx';
import {
  Container,
  Content,
  GradientSpan,
  MainTitle,
  MainTitleContainer,
  TitleTextContainer
} from './styles';

/**
 * @param {{
 *   backTo: string,
 *   title: string,
 *   children: JSX.Element
 * }} props
 * @returns {JSX.Element}
 * @constructor
 */
export function AppWrapper(props) {
  const { backTo, title, children } = props;

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