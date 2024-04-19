import {
  ButtonsContainer,
  ImageContainer,
  Link,
  LogoImage,
  Navigation,
  SpacingContainer
} from './styles.js';
import { routes } from '../../lib/routes.js';

export function NavigationBar() {
  return (
    <Navigation>
      <Link href={'/'}>
        <ImageContainer>
          <LogoImage
            src="/assets/images/higia-accent.png"
            alt="Logo"
            fill={true}
          />
        </ImageContainer>
      </Link>
      <ButtonsContainer>
        {routes.map(({ path, Icon }, index) => (
          <TabNavigationButton
            href={path}
            Icon={Icon}
            key={index}
            isSelected={path === '/'}
          />
        ))}
      </ButtonsContainer>

      <SpacingContainer>
        <span></span>
      </SpacingContainer>
    </Navigation>
  );
}