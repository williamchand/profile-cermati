import React from 'react';
import {cx} from 'emotion/macro';
import { useCookies } from 'react-cookie';
import useWindowPosition from './hooks/useWindowPosition';
import useWindowSize from './hooks/useWindowSize';
import {uNewsletter, uNewsletterContent, uNewsletterBody, uNewsletterClose, uNewsletterInput, uNewsletterDescription, uNewsletterTitle, uNewsletterButton, uNewsletterShow, uNewsletterHide, uNewsletterButtonCol, uNewsletterInputCol} from './styles';
import { uRow } from '../../utils/grid';
function Appnewsletter() {
  const windowSize = useWindowSize();
  const scroll = useWindowPosition();
  const [cookies, setCookie] = useCookies(['newsletter']);
  const [show, setShow] = React.useState(false);
  const closeButton = () => {
    const date = new Date();
    date.setTime(date.getTime() + (600 * 1000));
    setCookie('newsletter', true, { path: '/', expires: date });
    setShow(false);
  };
  React.useEffect(() => {
    if(scroll.y > windowSize.height/3 && !cookies.newsletter){
        setShow(true);
    }
  }, [cookies, scroll.y, windowSize.height]);
  return (
    <div className={cx(uNewsletter, show ? uNewsletterShow : uNewsletterHide)}>
      <div className={uNewsletterContent}>
        <div className={uRow}>
          <div onClick={closeButton} className={uNewsletterClose}>
            x
          </div>
        </div>
        <div className={uNewsletterBody}>
          <div className={uNewsletterTitle}>
            <b>Get latest updates in web technologies</b>
          </div>
          <div className={uNewsletterDescription}>
            I write articles related to web technologies, such as design trends, development
            tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
            them all.
          </div>
          <div className={uRow}>
            <div className={uNewsletterInputCol}>
              <input className={uNewsletterInput} placeholder="Email address" />
            </div>
            <div className={uNewsletterButtonCol}>
              <button className={uNewsletterButton}>
                <b>Count me in!</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appnewsletter;
