import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import ModalLoginWindow from '../ModalLoginWindow';
import Footer from '../Footer/Footer';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

type Props = {
  isModal: boolean;
  onCloseModal: any;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export function LoginModal({ isModal, setIsModal , onCloseModal}: Props | any) {
  return (
    <div className="modal">
      <div className="modal__title">
        <span className="modal__title-text">Sign In</span>
        <button type="button" className="modal__title-button" onClick={onCloseModal}>
          X
        </button>
      </div>
      <form
        // onSubmit={handleSubmit}
        className="modal__form">
        <div className="modal__form-input">
          <input
            // ref={emailRef}
            key="email"
            name="email"
            // value={email}
            // onChange={handleSetEmail}
            type="email"
            placeholder="Email or phone number"
          />
        </div>
        <div className="modal__form-input">
          <input
            // ref={passwordRef}
            key="pass"
            name="password"
            // value={password}
            // onChange={handleSetPass}
            type="password"
            placeholder="Password"
          />
        </div>
        <button type="button" className="modal__form-button">
          Sign In
        </button>
      </form>
    </div>

  );
}
