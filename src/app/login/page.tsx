import {
  BrandContainer,
  BrandLogoContainer,
  BrandLogoImage,
  Container,
  FormFieldContainer,
  FormFieldLabel,
  GradientActionButton,
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
            <FormFieldContainer>
              <FormFieldLabel>Label</FormFieldLabel>
              <FormFieldLabel />
            </FormFieldContainer>

            <FormFieldContainer>
              <FormFieldLabel>Label</FormFieldLabel>
              <FormFieldLabel />
            </FormFieldContainer>

            <GradientActionButton type="button" />
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

                Entrar com Google
              </IconActionButtonImageContainer>
            </IconActionButton>

            <IconActionButton type="button">
              <IconActionButtonImageContainer>
                <IconActionButtonImage
                  src="/assets/images/google.png"
                  alt="Google Logo"
                  fill={true} />

                Entrar com Google
              </IconActionButtonImageContainer>
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