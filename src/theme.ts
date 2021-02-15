import React from 'react';

export default {
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
};

const tokens = {
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
  mobile: '0px',
  tablet: '640px',
  desktop: '1200px',
};

const atoms = {
  bg_color_black_80: { backgroundColor: tokens.black_80 },
  bg_color_black_90: { backgroundColor: tokens.black_90 },
  bg_color_black: { backgroundColor: tokens.black },
  bg_color_green: { backgroundColor: tokens.green },
  bg_color_red: { backgroundColor: tokens.red },
  bg_color_trans: { backgroundColor: 'transparent' },
  bg_color_white_01: { backgroundColor: tokens.white_01 },
  bg_color_white_02: { backgroundColor: tokens.white_02 },
  bg_color_white_03: { backgroundColor: tokens.white_03 },
  bg_color_white_04: { backgroundColor: tokens.white_04 },
  bg_color_white_05: { backgroundColor: tokens.white_05 },
  bg_color_white_10: { backgroundColor: tokens.white_10 },
  bg_color_white_20: { backgroundColor: tokens.white_20 },
  bg_color_white_30: { backgroundColor: tokens.white_30 },
  bg_color_white_40: { backgroundColor: tokens.white_40 },
  bg_color_white_50: { backgroundColor: tokens.white_50 },
  bg_color_white_60: { backgroundColor: tokens.white_60 },
  bg_color_white_70: { backgroundColor: tokens.white_70 },
  bg_color_white: { backgroundColor: tokens.white },
  border_color_black_80: { borderColor: tokens.black_80 },
  border_color_black_90: { borderColor: tokens.black_90 },
  border_color_black: { borderColor: tokens.black },
  border_color_white_01: { borderColor: tokens.white_01 },
  border_color_white_02: { borderColor: tokens.white_02 },
  border_color_white_03: { borderColor: tokens.white_03 },
  border_color_white_04: { borderColor: tokens.white_04 },
  border_color_white_05: { borderColor: tokens.white_05 },
  border_color_white_10: { borderColor: tokens.white_10 },
  border_color_white_20: { borderColor: tokens.white_20 },
  border_color_white_30: { borderColor: tokens.white_30 },
  border_color_white_40: { borderColor: tokens.white_40 },
  border_color_white_50: { borderColor: tokens.white_50 },
  border_color_white_60: { borderColor: tokens.white_60 },
  border_color_white_70: { borderColor: tokens.white_70 },
  border_color_white: { borderColor: tokens.white },
  border_none: { border: 0 },
  border_style_solid: { borderStyle: 'solid' },
  border_width_1: { borderWidth: 1 },
  color_black_80: { color: tokens.black_80 },
  color_black_90: { color: tokens.black_90 },
  color_black: { color: tokens.black },
  color_green: { color: tokens.green },
  color_red: { color: tokens.red },
  color_white_01: { color: tokens.white_01 },
  color_white_02: { color: tokens.white_02 },
  color_white_03: { color: tokens.white_03 },
  color_white_04: { color: tokens.white_04 },
  color_white_05: { color: tokens.white_05 },
  color_white_10: { color: tokens.white_10 },
  color_white_20: { color: tokens.white_20 },
  color_white_30: { color: tokens.white_30 },
  color_white_40: { color: tokens.white_40 },
  color_white_50: { color: tokens.white_50 },
  color_white_60: { color: tokens.white_60 },
  color_white_70: { color: tokens.white_70 },
  color_white: { color: tokens.white },
  cursor_pointer: { cursor: 'pointer' },
  cursor_default: { cursor: 'default' },
  pointer_events_none: { pointerEvents: 'none' },
  fs_l: { fontSize: 24 },
  fs_m: { fontSize: 14 },
  fs_xl: { fontSize: 32 },
  fs_xs: { fontSize: 12 },
  padding_x_20: { paddingLeft: 20, paddingRight: 20 },
  padding_y_5: { paddingTop: 5, paddingBottom: 5 },
  tt_up: { textTransform: 'uppercase' },
} as const;

export const styles = (rules: [keyof typeof atoms, ...boolean[]][]) => {
  return rules.reduce((acc, [k, ...cond]) => {
    if (cond.every((c) => c)) acc = { ...acc, ...atoms[k] };
    return acc;
  }, {});
};

interface GenerateCssProps {
  suffix?: string;
  psuedoSelector?: string;
  breakpoint?: [number, number];
}
export const GenerateCss = ({ suffix, psuedoSelector }: GenerateCssProps) =>
  Object.entries(atoms)
    .map(([atom, declarations]) => {
      return `.${atom}${suffix ? '_' + suffix : ''}${
        psuedoSelector ? ':' + psuedoSelector : ''
      } { ${Object.entries(declarations).map(
        ([prop, val]) =>
          `${prop.replace(/([A-Z])/g, '-$1').toLowerCase()}: '${val}'; }`
      )}`;
    })
    .join('\n');

export const Css = `
${GenerateCss({})}
${GenerateCss({ suffix: 'on_hover', psuedoSelector: 'hover' })}
@media (min-width: ${tokens.mobile}){
  ${GenerateCss({})}
  ${GenerateCss({ suffix: 'on_hover_on_mobile', psuedoSelector: 'hover' })}
}
@media (min-width: ${tokens.tablet}){
  ${GenerateCss({})}
  ${GenerateCss({ suffix: 'on_hover_on_tablet', psuedoSelector: 'hover' })}
}
@media (min-width: ${tokens.desktop}){
  ${GenerateCss({})}
  ${GenerateCss({ suffix: 'on_hover_on_desktop', psuedoSelector: 'hover' })}
}
`;

export const CreateStyleSheet = (css: string): void => {
  const style = document.createElement('style');
  style.innerHTML = css;
  document.getElementsByTagName('head')[0].appendChild(style);
};

type classType = keyof typeof atoms;
export const clx = (atoms: classType[]) => {
  return atoms.join(' ');
};

console.log(clx(['bg_color_black_80', 'color_green']));
