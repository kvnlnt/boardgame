export interface ThemeOpts {
  black: string;
  black_80: string;
  black_90: string;
  white: string;
  white_01: string;
  white_02: string;
  white_03: string;
  white_04: string;
  white_05: string;
  white_10: string;
  white_20: string;
  white_30: string;
  white_40: string;
  white_50: string;
  white_60: string;
  white_70: string;
  space: number;
  red: string;
  green: string;
  yellow: string;
  blue: string;
}

export const defaultTheme: ThemeOpts = {
  black: 'rgba(0, 0, 0, 1)',
  black_80: 'rgba(0, 0, 0, 0.8)',
  black_90: 'rgba(0, 0, 0, 0.9)',
  white: 'rgba(255, 255, 255, 1)',
  white_01: 'rgba(255, 255, 255, 0.01)',
  white_02: 'rgba(255, 255, 255, 0.02)',
  white_03: 'rgba(255, 255, 255, 0.03)',
  white_04: 'rgba(255, 255, 255, 0.04)',
  white_05: 'rgba(255, 255, 255, 0.05)',
  white_10: 'rgba(255, 255, 255, 0.1)',
  white_20: 'rgba(255, 255, 255, 0.2)',
  white_30: 'rgba(255, 255, 255, 0.3)',
  white_40: 'rgba(255, 255, 255, 0.4)',
  white_50: 'rgba(255, 255, 255, 0.5)',
  white_60: 'rgba(255, 255, 255, 0.6)',
  white_70: 'rgba(255, 255, 255, 0.7)',
  space: 10,
  red: 'rgba(255, 0, 0, 1)',
  green: 'rgba(0, 125, 0, 1)',
  yellow: 'rgba(255,255,0,1)',
  blue: 'rgba(0,0,255,1)',
};

export const GenerateTheme = (theme: ThemeOpts) => `
:root {
  ${Object.entries(theme)
    .map(([key, val]) => `--${key}: ${val};`)
    .join('\n')}
}`;
