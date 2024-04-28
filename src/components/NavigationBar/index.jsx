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
import { useLocation } from 'react-router-dom';

export function NavigationBar() {
  return (
    <Navigation>
      <Link to={'/'}>
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
            selected={path === useLocation().pathname}
          />
        ))}
      </ButtonsContainer>

      <SpacingContainer>
        <span></span>
      </SpacingContainer>
    </Navigation>
  );
}