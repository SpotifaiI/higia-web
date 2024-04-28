import { FormFieldInput } from '../../components/FormFieldInput/index.jsx';
import {
  GradientActionButton
} from '../../components/GradientActionButton/index.jsx';
import {
  BrandContainer,
  BrandLogoContainer,
  BrandLogoImage,
  BrandName,
  Container,
  LoginContainer,
  LoginContainerWrapper,
  LoginForm,
  LoginHeader,
  LoginIcon,
  LoginIconContainer,
  LoginTitle,
} from './styles.js';

export function Login() {
  return (
    <Container>
      <LoginContainer>
        <LoginContainerWrapper>
          <LoginHeader>
            <LoginIconContainer>
              <LoginIcon
                src="/assets/images/higia-accent.png"
                alt="Logo Higia"
              />
            </LoginIconContainer>
            <LoginTitle>Faça login para começar!</LoginTitle>
          </LoginHeader>

          <LoginForm>
            <FormFieldInput label="E-mail" />
            <FormFieldInput label="Senha" />

            <GradientActionButton type="button">Entrar</GradientActionButton>
          </LoginForm>
        </LoginContainerWrapper>
      </LoginContainer>

      <BrandContainer>
        <BrandLogoContainer>
          <BrandLogoImage
            src="/assets/images/higia-accent-dark.png"
            alt="Logo Higia"
          />
        </BrandLogoContainer>
        <BrandName>HIGIA</BrandName>
      </BrandContainer>
    </Container>
  );
}