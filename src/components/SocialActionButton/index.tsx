import { ButtonHTMLAttributes, CSSProperties } from 'react';

import {
  IconActionButton,
  IconActionButtonImage,
  IconActionButtonImageContainer
} from './styles';

export type SocialListType = {
  [value: string]: {
    imagePath: string;
    name: string;
    textColor?: string;
  }
};

export const socialsList: SocialListType = {
  google: {
    imagePath: '/assets/images/google.png',
    name: 'Google',
  },
  facebook: {
    imagePath: '/assets/images/facebook.png',
    name: 'Facebook',
    textColor: '#0063EC'
  }
};

type SocialListKey = 'google'|'facebook';

export type SocialActionButtonProps = {
  socialType: SocialListKey;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function SocialActionButton({
  socialType,
  ...rest
}: SocialActionButtonProps) {
  const buttonImagePath = socialsList[socialType].imagePath;
  const buttonDescription = socialsList[socialType].name;
  const buttonIconAlt = `Ícone ${buttonDescription}`;
  const buttonLabel = `Entrar com ${buttonDescription}`;
  const buttonTextColor = socialsList[socialType].textColor;

  const customStyles: CSSProperties = {};

  if (buttonTextColor) {
    customStyles.color = buttonTextColor;
  }

  return (
    <IconActionButton
      type="button"
      style={customStyles}
      {...rest}>
      <IconActionButtonImageContainer>
        <IconActionButtonImage
          src={buttonImagePath}
          alt={buttonIconAlt}
          fill={true} />
      </IconActionButtonImageContainer>

      {buttonLabel}
    </IconActionButton>
  );
}