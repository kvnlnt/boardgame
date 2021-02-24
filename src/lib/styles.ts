import { GenerateAtoms } from '~/design/atoms';
import { GenerateTheme, ThemeOpts } from '~/design/themes';

const Css = `
@keyframes fadeInRight {
    0% {
        opacity: 0;
        transform: translate3d(100%,0,0)
    }
    to {
        opacity: 1;
        transform: translateZ(0)
    }
}
@keyframes fadeOut {
    0% {
        opacity: 1;
        transform: translate3d(100%,0,0)
        visibility:visible
    }
    to {
        opacity: 0;
        transform: translateZ(0)
        visibility:hidden
    }
}
@media (min-width: 0px){
  ${GenerateAtoms({})}
  ${GenerateAtoms({ suffix: '_on_hover', psuedoSelector: ':hover' })}
}
@media (min-width: 640px){
  ${GenerateAtoms({})}
  ${GenerateAtoms({ suffix: '_on_hover_on_tablet', psuedoSelector: ':hover' })}
}
@media (min-width: 1200px){
  ${GenerateAtoms({})}
  ${GenerateAtoms({ suffix: '_on_hover_on_desktop', psuedoSelector: ':hover' })}
}
`;

export const RenderStyles = (theme: ThemeOpts): void => {
  if (!document.querySelector('#theme')) {
    const themeStyleSheet: HTMLStyleElement = document.createElement('style');
    themeStyleSheet.id = 'theme';
    themeStyleSheet.innerHTML = GenerateTheme(theme);
    document.getElementsByTagName('head')[0].appendChild(themeStyleSheet);
  }
  if (!document.querySelector('#atoms')) {
    const atomsStyleSheet: HTMLStyleElement = document.createElement('style');
    atomsStyleSheet.id = 'atoms';
    atomsStyleSheet.innerHTML = Css;
    document.getElementsByTagName('head')[0].appendChild(atomsStyleSheet);
  }
};
