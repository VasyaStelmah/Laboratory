import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from "react-redux";
import './header.scss';
import ModalLoginWindow from '../ModalLoginWindow/ModalLoginWindow'
import Footer from '../Footer/Footer';
import { signup, signin } from "../../actions/auth";
import { Dispatch } from "redux"
type HeaderProps={
	isModal:boolean,
	setIsModal:React.Dispatch<React.SetStateAction<boolean>>
}
export default function Header({ isModal, setIsModal }:HeaderProps) {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [isSignup] = useState<boolean>(false);
	const dispatch: Dispatch<any> = useDispatch();
	const emailRef = useRef<HTMLInputElement>(null)
	const passwordRef= useRef<HTMLInputElement>(null)
	const handleModalLoginWindow:React.MouseEventHandler<HTMLButtonElement> = () => {
		setIsModal(!isModal)
	}
	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		if (isSignup) {
			dispatch(signup(email, password));
		} else {
			dispatch(signin(email, password));
		}
		setEmail('');
		setPassword('')
	};
	const handleSetEmail = (e:React.ChangeEvent<HTMLInputElement>):void => {
		setEmail(emailRef.current!.value)
	}
	const handleSetPass = (e:React.ChangeEvent<HTMLInputElement>):void => {
			setPassword(passwordRef.current!.value)
	}
	useEffect(() => {
		if (typeof emailRef.current === 'undefined' || emailRef.current === null) {
		} else {
			emailRef.current!.focus()
		}
	}, [email, setEmail]);
	useEffect(() => {
		if (typeof passwordRef.current === 'undefined'||passwordRef.current === null) {
		} else {
			passwordRef.current!.focus()
		}
	}, [password, setPassword]);
	return (!isModal
		? <>
			<header className="showcase">
				<div className="showcase-top">
					<img alt="Netflix" src="https://i.ibb.co/r5krrdz/logo.png" />
					<div className="showcase-top__right">
						<div className="showcase-top__right-lang">
							<select>
								<option value="/by/" lang="en">English</option>
								<option value="/by-ru/" lang="ru">Русский</option>
							</select>
						</div>
						<div className="showcase-top__right-signin">
							<button onClick={handleModalLoginWindow}>Sign In</button>
						</div>
					</div>
				</div>
				<div className="showcase-content">
					<h1 className="showcase-content__title">Unlimited movies, TV shows, and more.</h1>
					<div className="showcase-content__subtitle">Watch anywhere. Cancel anytime.</div>
					<div className="showcase-content__text">Ready to watch? Enter your email to create or restart your membership.</div>
					<div className="showcase-content__form">
						<div className="showcase-content__form-input">
							<input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email adress" />
						</div>
						<div className="showcase-content__form-button">
							<button>Get started</button>
						</div>
					</div>
				</div>
			</header>
		</>
		: <ModalLoginWindow>
			<header className="showcase">
				<div className="showcase-top">
					<img alt="Netflix" src="https://i.ibb.co/r5krrdz/logo.png" />
				</div>
				<div className="modal">
					<div className="modal__title">
						<span className="modal__title-text">Sign In</span>
						<button className="modal__title-button" onClick={handleModalLoginWindow}>X</button>
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
								placeholder="Email or phone number" />
						</div>
						<div className="modal__form-input">
							<input
								ref={passwordRef}
								key="pass"
								name="password"
								value={password}
								onChange={handleSetPass}
								type="password"
								placeholder="Password" />
						</div>
						<button className="modal__form-button">Sign In</button>
					</form>
				</div>
			</header>
			<Footer isModal={isModal} />
		</ModalLoginWindow >
	)
}