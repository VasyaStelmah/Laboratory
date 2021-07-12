import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from "react-redux";
import './header.css';
import ModalLoginWindow from '../ModalLoginWindow/ModalLoginWindow'
import Footer from '../Footer/Footer';
import { signup, signin } from "../../actions/auth";
export default function Header({ isModal, setIsModal }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isSignup] = useState(false);
	const dispatch = useDispatch();
	const emailRef = useRef();
	const passwordRef = useRef();
	const handleModalLoginWindow = () => {
		setIsModal(!isModal)
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		if (isSignup) {
			dispatch(signup(email, password));
		} else {
			dispatch(signin(email, password));
		}
		setEmail('');
		setPassword('')
	};
	const handleSetEmail = (e) => {
		setEmail(emailRef.current.value)
	}
	const handleSetPass = (e) => {
		setPassword(passwordRef.current.value)
	}
	useEffect(() => {
		if (typeof emailRef.current === 'undefined') {
		} else {
			emailRef.current.focus()
		}
	}, [email, setEmail]);
	useEffect(() => {
		if (typeof passwordRef.current === 'undefined') {
		} else {
			passwordRef.current.focus()
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