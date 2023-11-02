import {
  BrandContainer,
  BrandLogoContainer,
  BrandLogoImage,
  Container, LoginContainer, LoginHeader, LoginIcon, LoginIconContainer, LoginTitle
} from "./styles";

function Login() {
  return (
    <Container>
      <LoginContainer>
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
      </LoginContainer>

      <BrandContainer>
        <BrandLogoContainer>
          <BrandLogoImage
            src="/assets/images/higia-accent.png"
            alt="Logo Higia"
            fill={true} />
        </BrandLogoContainer>
      </BrandContainer>
    </Container>
  );
}

export default Login;