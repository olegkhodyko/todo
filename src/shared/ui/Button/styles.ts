import { ViewStyle, TextStyle } from 'react-native';
import { ValueOfEnum } from '@utils/types';
import theme from '@theme';

export const ButtonTypeEnum = {
  md_blue: '[md-blue]',
  md_gray: '[md-gray]',
} as const;

export type ButtonVariant = ValueOfEnum<typeof ButtonTypeEnum>;

interface ButtonStyleProps {
  container: ViewStyle;
  text: TextStyle;
}

const baseStyles = {
  container: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  } as ViewStyle,
  text: {
    fontWeight: '600',
    fontSize: 16,
  } as TextStyle,
};

export const getButtonStyles = (variant: ButtonVariant): ButtonStyleProps => {
  const variants: Record<ButtonVariant, ButtonStyleProps> = {
    '[md-blue]': {
      container: {
        ...baseStyles.container,
        backgroundColor: theme.colors.primaryBlue,
      },
      text: {
        ...baseStyles.text,
        color: theme.colors.white,
      },
    },
    '[md-gray]': {
      container: {
        ...baseStyles.container,
        backgroundColor: theme.colors.neutralGray,
      },
      text: {
        ...baseStyles.text,
        color: theme.colors.white,
      },
    },
  };

  return variants[variant] ?? variants['[md-blue]'];
};
