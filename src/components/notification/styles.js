import {css} from 'emotion/macro';
import { uBgBlue } from '../../utils/styles';
import { uRow, uColmd2 } from '../../utils/grid';

export const uNotification = css`
  background-color: white;
  position: sticky;
  overflow-y: hidden;
  transition-property: all;
  transition-duration: .5s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  top: 0;
`;

export const uNotificationContainer = css`
  ${uRow}
  max-width: 720px;
  margin: 0px auto;
  padding: 0px 8px;
`;

export const uNotificationButton = css`
  ${uBgBlue}
  color: white;
  height: 28px;
  width: 60px;
  border-radius: 0.25rem;
  border: 1px solid transparent;
  padding: 0px 4px;
  margin-bottom: 8px;
  @media (min-width: 768px){
    margin-bottom: 0px;
    height: 42px;
    width: 80px;
  };
`;

export const uNotificationColButton = css`
  ${uColmd2}
  align-self: center;
`;

export const uNotificationHide = css`
  max-height: 0px
`;

export const uNotificationShow = css`
  max-height: 500px
`;

export const uNotificationParagraph = css`
  font-size: 18px;
  text-align: left;
  color: gray;
  margin: 8px 0;
  @media (min-width: 768px){
    margin: 12px 0;
  };
`;