import alignment from './alignment';
import backgrounds from './backgrounds';
import borders from './borders';
import colors from './colors';
import cursors from './cursors';
import display from './display';
import text from './text';
import appearance from './appearance';
import grids from './grids';
import spacing from './spacing';
import sizing from './sizing';
import animation from './animation';

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
  yellow: 'rgba(255,255,0,1)',
};

const css = {
  ...animation,
  ...backgrounds,
  ...borders,
  ...colors,
  ...cursors,
  ...display,
  ...grids,
  ...text,
  ...alignment,
  ...appearance,
  ...spacing,
  ...sizing,
} as const;

interface GenerateAtomsProps {
  suffix?: string;
  psuedoSelector?: string;
}
export const GenerateAtoms = ({
  suffix = '',
  psuedoSelector = '',
}: GenerateAtomsProps) =>
  Object.entries(css)
    .map(([atom, declarations]) => {
      return `.${atom}${suffix}${psuedoSelector} { ${Object.entries(
        declarations
      )
        .map(
          ([prop, val]) =>
            `${prop.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${val}; `
        )
        .join('')}}`;
    })
    .join('\n');

type selector = keyof typeof css;
type selector_on_hover = `${selector}_on_hover`;
type selector_on_hover_tablet = `${selector}_on_hover_on_tablet`;
type selector_on_hover_desktop = `${selector}_on_hover_on_desktop`;

export type atoms =
  | ''
  | selector
  | selector_on_hover
  | selector_on_hover_tablet
  | selector_on_hover_desktop;

export const atomize = (...list: atoms[]) => {
  return list.join(' ');
};
