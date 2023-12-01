import Head from "next/head";

import React, { useState } from "react";
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
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

  const [name, setName] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [profilePic, setProfilePic] = useState<string | undefined>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ('profileObj' in response) {
      const { profileObj } = response;
      if (profileObj) {
        setName(profileObj.name);
        setEmail(profileObj.email);
        setProfilePic(profileObj.imageUrl);
        setIsLoggedIn(true);
      }
    }
  };

  return (
    <Container>

      <div className="container">
        <GoogleLogin
          clientId="51327336967-h5kl3utpnjlf4v6am3q399t3rfb9qagp.apps.googleusercontent.com"
          buttonText="Continuar com o Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
        {isLoggedIn ? (
          <div>
            <h1>User Information</h1>
            <img className="profile" src={profilePic} alt="Profile" />
            <p>Name: {name}</p>
            <p>Email: {email}</p>
          </div>
        ) : ' '}
      </div>
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