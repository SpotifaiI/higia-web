import Head from "next/head";

import { FormFieldInput } from "@/components/FormFieldInput";
import { GradientActionButton } from "@/components/GradientActionButton";
import {
  BrandContainer,
  BrandLogoContainer,
  BrandLogoImage,
  Container,
  IconActionButton,
  IconActionButtonImage,
  IconActionButtonImageContainer,
  LoginContainer,
  LoginContainerWrapper,
  LoginFooter,
  LoginForm,
  LoginHeader,
  LoginIcon,
  LoginIconContainer,
  LoginTitle,
  Separator,
  SeparatorContainer,
  SeparatorText
} from "./styles";

function Login() {
  return (
    <Container>
      <Head>
        <title>Higia | Login</title>
      </Head>

      <LoginContainer>
        <LoginContainerWrapper>
          <LoginHeader>
            <LoginIconContainer>
              <LoginIcon
                src="/assets/images/higia-accent.png"
                alt="Logo Higia"
                fill={true} />
            </LoginIconContainer>
            <LoginTitle>
              Faça login para começar!
            </LoginTitle>
          </LoginHeader>

          <LoginForm>
            <FormFieldInput label="E-mail" />
            <FormFieldInput label="Senha" />

            <GradientActionButton type="button">
              Entrar
            </GradientActionButton>
          </LoginForm>

          <SeparatorContainer>
            <Separator />
            <SeparatorText>ou</SeparatorText>
            <Separator />
          </SeparatorContainer>

          <LoginFooter>
            <IconActionButton type="button">
              <IconActionButtonImageContainer>
                <IconActionButtonImage
                  src="/assets/images/google.png"
                  alt="Google Logo"
                  fill={true} />
              </IconActionButtonImageContainer>

              Entrar com Google
            </IconActionButton>

            <IconActionButton type="button">
              <IconActionButtonImageContainer>
                <IconActionButtonImage
                  src="/assets/images/google.png"
                  alt="Google Logo"
                  fill={true} />
              </IconActionButtonImageContainer>

              Entrar com Google
            </IconActionButton>
          </LoginFooter>
        </LoginContainerWrapper>
      </LoginContainer>

      <BrandContainer>
        <BrandLogoContainer>
          <BrandLogoImage
            src="/assets/images/higia-accent-dark.png"
            alt="Logo Higia"
            fill={true} />
        </BrandLogoContainer>
      </BrandContainer>
    </Container>
  );
}

export default Login;