import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import ModalLoginWindow from '../ModalLoginWindow';
import Footer from '../Footer/Footer';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { LoginModal } from './LoginModal';
import { HeaderPanel } from './HeaderPanel';

type Props = {
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ isModal, setIsModal }: Props) {
  // TODO - temporary for debag
  // const { user, loading, error } = useTypedSelector((state) => state.auth);
  const { signin, signup } = useActions();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isSignup] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleModalLoginWindow: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsModal(!isModal);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (isSignup) {
      signup(email, password);
    } else {
      signin(email, password);
    }
    setEmail('');
    setPassword('');
  };

  const handleSetEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    emailRef.current?.value && setEmail(emailRef.current.value);
  };

  const handleSetPass = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(passwordRef.current?.value || '');
  };

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, [email, setEmail]);

  useEffect(() => {
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
  }, [password, setPassword]);

  return (
    <>
      <header className="section-header">
        <div className="section-header-top">
          <img alt="Netflix" src="https://i.ibb.co/r5krrdz/logo.png" />
          {!isModal && <HeaderPanel onClickHandler={handleModalLoginWindow} />}
        </div>
        {!isModal
          ? (
            <div className="section-header-content">
              <h1 className="section-header-content__title">Unlimited movies, TV shows, and more.</h1>
              <div className="section-header-content__subtitle">Watch anywhere. Cancel anytime.</div>
              <div className="section-header-content__text">
                Ready to watch? Enter your email to create or restart your membership.
              </div>
              <div className="section-header-content__form-button">
                <NavLink to="/search">
                  <button type="button">Go to searching movies</button>
                </NavLink>
              </div>
            </div>
          )
          : <LoginModal onCloseModal={handleModalLoginWindow} />
        }
      </header>
    </>
  );
}


/*

 ) : (
    <ModalLoginWindow>
      <header className="section-header">
        <div className="section-header-top">
          <img alt="Netflix" src="https://i.ibb.co/r5krrdz/logo.png" />
        </div>
        {/*
            <div className="modal">
              <div className="modal__title">
                <span className="modal__title-text">Sign In</span>
                <button type="button" className="modal__title-button" onClick={handleModalLoginWindow}>
                  X
                </button>
              </div>
              <form onSubmit={handleSubmit} className="modal__form">
                <div className="modal__form-input">
                  <input
                    ref={emailRef}
                    key="email"
                    name="email"
                    value={email}
                    onChange={handleSetEmail}
                    type="email"
                    placeholder="Email or phone number"
                  />
                </div>
                <div className="modal__form-input">
                  <input
                    ref={passwordRef}
                    key="pass"
                    name="password"
                    value={password}
                    onChange={handleSetPass}
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <button type="button" className="modal__form-button">
                  Sign In
                </button>
              </form>
            </div>
        * /}

        </header>
        <Footer isModal={isModal} />
      </ModalLoginWindow>
*/