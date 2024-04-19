import {
  ButtonsContainer,
  ImageContainer,
  Link,
  LogoImage,
  Navigation,
  SpacingContainer
} from './styles.js';

import { routes } from '../../lib/routes.js';
import { TabNavigationButton } from '../TabNavigationButton/index.jsx';

export function NavigationBar() {
  return (
    <Navigation>
      <Link href={'/'}>
        <ImageContainer>
          <LogoImage
            src="/assets/images/higia-accent.png"
            alt="Logo"
          />
        </ImageContainer>
      </Link>
      <ButtonsContainer>
        {routes.map(({ path, Icon }, index) => (
          <TabNavigationButton
            href={path}
            icon={Icon}
            key={index}
            selected={path === '/'}
          />
        ))}
      </ButtonsContainer>

      <SpacingContainer>
        <span></span>
      </SpacingContainer>
    </Navigation>
  );
}