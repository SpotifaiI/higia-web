'use client'
import { FormFieldInput } from "@/components/FormFieldInput";
import { GradientActionButton } from "@/components/GradientActionButton";
import Head from "next/head";
import { useState } from 'react';
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
  LoginTitle
} from "./styles";

function Login() {

  const [name, setName] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [profilePic, setProfilePic] = useState<string | undefined>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
                fill={true}
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
            fill={true}
          />
        </BrandLogoContainer>
        <BrandName>HIGIA</BrandName>
      </BrandContainer>
    </Container>
  );
}

export default Login;