import {css} from 'emotion/macro';
import workDeskImage from '../../../../assets/work-desk__dustin-lee.jpg';
import { uCenter, uBgDarkBlue, uColorBlue, uBgSmokeGrey } from '../../../../utils/styles';
import { uRow } from '../../../../utils/grid';

export const uHero = css`
  background: url('${workDeskImage}') no-repeat center center;
  background-size: cover;
`;

export const uHeroSecond = css`
  ${uBgDarkBlue}
  height: 560px;
  z-index: 10;
  opacity 0.8;
`;

export const uHeroParagraph = css`
  ${uCenter}
  height: 355px;
  padding-top: 100px;
`;

export const uHeroParagraphOne = css`
  color: white;
  font-size: 28px;
  margin: 10px;
`;

export const uHeroParagraphTwo = css`
  margin: 10px;
  color: white;
  font-size: 24px;
`;

export const uHeroParagraphThree = css`
  margin: 30px;
  color: white;
  font-size: 18px;
`;

export const uHeroButton = css`
  color: white;
  margin: 10px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 4px;
  padding: 10px;
  font-size: 18px;
  &:hover{
    background-color: white;
    ${uColorBlue}
  }
`;

export const uLogo = css`
  width: 50px;
  height: 50px;
  padding: 20px;
`;

export const uHighlightsParagraph = css`
  ${uCenter}
  height: auto;
  padding: 50px 30px 20px 30px;
  width: 100%;
  text-align: center;
`;

export const uHighlightsParagraphOne = css`
  max-width: 580px;
  color: black;
  font-size: 28px;
  margin: 10px auto;
`;

export const uHighlightsParagraphTwo = css`
  max-width: 580px;
  margin: 10px auto;
  color: black;
  font-size: 18px;
`;

export const uHighlightsRow = css`
  ${uRow}
  justify-content: center;
`;

export const uCard = css`
  ${uBgSmokeGrey}
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  word-wrap: break-word;
  background-clip: border-box;
  border: 3px groove white;
  border-radius: 4px;
  @media (min-width: 960px){
    width: 30%;
    margin: 20px 1% 0px 1%;    
  };
  @media (max-width: 960px) and (min-width: 480px){
    width: 45%;
    margin: 20px 1.5% 0px 1.5%;    
  };
  @media (max-width: 480px){
    width: 90%;
    margin: 20px 5% 0px 5%;    
  };
`;

export const uCardBody = css`
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 14px 16px 16px 16px;
`;

export const uCardTitle = css`
  display: flex;
`;

export const uCardTitleLeft = css`
  font-size: 18px;
  color: black;
`;

export const uCardTitleRight = css`
  color: gray;
  margin-left: auto;
`;

export const uCardText = css`
  margin-top: 10px;
  font-size: 16px;
`;

export const uRecipe = css`
  padding-bottom: 60px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
