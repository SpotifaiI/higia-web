import Head from "next/head";

import { FormFieldInput } from "@/components/FormFieldInput";
import { GradientActionButton } from "@/components/GradientActionButton";
import { SocialActionButton } from "@/components/SocialActionButton";
import {
  BrandContainer,
  BrandLogoContainer,
  BrandLogoImage,
  BrandName,
  Container,
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
            <SocialActionButton socialType="google" />
            <SocialActionButton socialType="facebook" />
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
        <BrandName>
          HIGIA
        </BrandName>
      </BrandContainer>
    </Container>
  );
}

export default Login;