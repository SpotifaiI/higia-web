'use client'
import Head from "next/head";
import { gapi } from "gapi-script";
import { useEffect, useState } from 'react';
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
  GoogleLoginButton,
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
  SeparatorText,
} from "./styles";

function Login() {

  const [name, setName] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [profilePic, setProfilePic] = useState<string | undefined>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const clientId = "51327336967-h5kl3utpnjlf4v6am3q399t3rfb9qagp.apps.googleusercontent.com"
  useEffect(() => {
    gapi.load("client:auth2", () => {
        gapi.auth2.init({clientId:clientId})
    })
  },[])

  const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    
    console.log(response)

    if ('googleId' in response && response.googleId)
    {
      console.log(response.googleId)
    }

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

          <SeparatorContainer>
            <Separator />
            <SeparatorText>ou</SeparatorText>
            <Separator />
          </SeparatorContainer>

          <LoginFooter>
            <div className="container">
              <GoogleLoginButton
                clientId="51327336967-h5kl3utpnjlf4v6am3q399t3rfb9qagp.apps.googleusercontent.com"
                buttonText="Continuar com o Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              />
              
            </div>  
          </LoginFooter>
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