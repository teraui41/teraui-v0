import { create } from '@storybook/theming/create';
import brandImage from './assets/brand-logo-text.png'
import theme from '../src/lib/theme';

export default create({
  base: 'light',

  colorPrimary: theme.colors.primary,
  colorSecondary: theme.colors.secondary,

  // UI
  appBg: theme.colors.grey0,
  appContentBg: theme.colors.white,
  appBorderColor: theme.colors.grey1,
  appBorderRadius: theme.radius,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: theme.colors.black,
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: theme.colors.grey3,
  barSelectedColor: theme.colors.grey4,
  barBg: theme.colors.white,

  // Form colors
  inputBg: theme.colors.white,
  inputBorder: theme.colors.grey0,
  inputTextColor: theme.colors.black,
  inputBorderRadius: theme.colors.radius,

  brandTitle: 'TERA UI',
  brandUrl: 'https://example.com',
  brandImage,
})
