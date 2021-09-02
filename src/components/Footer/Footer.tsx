import React from 'react';
import { NavLink } from 'react-router-dom';

import { content, locale } from './content';
import { ToggleLanguage } from '../ToggleLanguage'

import './footer.scss';

const {
  titleFooterSection,
  productTitle,
} = locale;

type Props = {
  isModal: boolean;
};

export default function Footer({ isModal }: Props) {
  const classNameWrap = !isModal ? 'footer-outer' : 'footer-outer__modal';

  return (
    <footer className={classNameWrap}>
      <div className="footer-inner">
        <div className="footer-text">{titleFooterSection}</div>
        <ul className="footer-cols">
          {content.map((obj) => (
            <li key={obj.id}>
              <NavLink to={obj.link}>{obj.text}</NavLink>
            </li>
          ))}
        </ul>
        <div className="section-header__right-lang lang-footer">
          <ToggleLanguage />
        </div>
        <div className="footer-text">{productTitle}</div>
      </div>
    </footer>
  );
}
