import {css} from 'emotion/macro';
import workDeskImage from '../../../../assets/work-desk__dustin-lee.jpg';
import { uCenter, uBgDarkBlue, uColorBlue } from '../../../../utils/styles';

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
  margin: 10px;
  color: white;
  font-size: 16px;
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

export const uCard = css`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: white;
  background-clip: border-box;
  border: 1px solid #c8ced3;
  border-radius: 4px;
  height: 255px;
  width: 152px;
  margin: 20px 10px 0px 10px;
`;

export const uCardImgTop = css`
  object-fit: cover;
  width: 100%;
  height: 150px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

export const uCardBody = css`
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 8px 8px 0px 8px;
`;

export const uCardTitle = css`
  font-size: 14px;
  color: #5ba3aa;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const uCardCreator = css`
  margin-top: 5px;
  color: #5ba3aa;
  font-size:10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const uCardText = css`
  margin-top: 10px;
  font-size: 9px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;  
`;

export const uCardRating = css`
  height: 125px;
  position: absolute;
  right: 0;
  bottom: 0;
  text-align: center;
`;

export const uCardRatingBlock = css`
  background-color: #5ba3aa;
  color: white;
  font-size:12px;
  vertical-align:middle;
  display: table-cell;
  width: 30px;
  height: 20px;
  border-top-left-radius: 5px;
`;

export const uHide = css`
  display: none;  
`;

export const uRecipe = css`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;