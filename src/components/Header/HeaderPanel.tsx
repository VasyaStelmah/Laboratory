import React from 'react';

import { ToggleLanguage } from '../ToggleLanguage'

import './header.scss';

type Props = {
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
};

const SIGN_IN_TEXT = 'Sign In';

export function HeaderPanel({ onClickHandler }: Props) {
  return (
    <div className="section-header-top__right">
      <div className="section-header-top__right-lang">
        <ToggleLanguage />
      </div>
      <div className="section-header-top__right-signin">
        <button type="button" onClick={onClickHandler} >
          {SIGN_IN_TEXT}
        </button>
      </div>
    </div>
  )
}

