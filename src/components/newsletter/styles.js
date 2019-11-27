import {css} from 'emotion/macro';
import { uBgBlue, uBgOrange } from '../../utils/styles';
import { uColmd2, uColmd10 } from '../../utils/grid';

export const uNewsletter = css`
  ${uBgBlue}
  position: fixed;
  z-index: 1;
  opacity: 0.8;
  left: 0;
  bottom: 0;
  max-width: 624px;
  color: white;
  transition-property: all;
  transition-duration: .5s;
`;

export const uNewsletterContent = css`
  padding: 8px;
`;

export const uNewsletterBody = css`
  padding: 10px;
`;

export const uNewsletterTitle = css`
  font-size: 26px;
`;

export const uNewsletterHide = css`
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  max-height: 0px;
`;

export const uNewsletterShow = css`
  transition-timing-function: cubic-bezier(1, 0, 0.5, 0);
  max-height: 500px;
`;
export const uNewsletterButtonCol = css`
  ${uColmd2}
  flex: 0 0 100%;
  justify-content: center;
  max-width: 100%;
  margin: 5px 0;
`;

export const uNewsletterButton = css`
  width: 95%;
  border-width: 0px;
  padding: 8px 0;
  color: white;
  ${uBgOrange}
`;

export const uNewsletterInputCol = css`
  ${uColmd10}
  flex: 0 0 100%;
  justify-content: center;
  margin: 5px 0;
  max-width: 100%;
`;

export const uNewsletterInput = css`
  width: 95%;
  border-width: 0px;
  padding: 8px 0;
`;

export const uNewsletterDescription = css`
  font-size: 18px;
  margin: 10px 0;
`;

export const uNewsletterClose = css`
  cursor: pointer;
  margin-left: auto;
`;