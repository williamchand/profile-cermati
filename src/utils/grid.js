import {css} from 'emotion/macro';

export const uRow = css`
  display: flex;
  flex-wrap: wrap;
`;

export const uColmd1 = css`
  @media (min-width: 768px){
    flex: 0 0 8.3333%;
    max-width: 8.333333%;
  };
`;

export const uColmd2 = css`
  @media (min-width: 768px){
    flex: 0 0 16.6667%;
    max-width: 16.666667%;
  };
`;

export const uColmd10 = css`
  @media (min-width: 768px){
    flex: 0 0 83.3333%;
    max-width: 83.333333%;
  };
`;

export const uColmd11 = css`
  @media (min-width: 768px){
    flex: 0 0 91.6667%;
    max-width: 91.666667%;
  };
`;
