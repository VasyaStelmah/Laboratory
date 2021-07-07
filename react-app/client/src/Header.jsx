import './header.css';
export default function Header() {
	return (
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
						<a href="#" className="btn btn-rounded">Sign In</a>
					</div>
				</div>
			</div>
			<div className="showcase-content">
				<h1 className="showcase-content__title">Unlimited movies, TV shows, and more.</h1>
				<div className="showcase-content__subtitle">Watch anywhere. Cancel anytime.</div>
				<div className="showcase-content__text">Ready to watch? Enter your email to create or restart your membership.</div>
				<div className="showcase-content__form">
					<div className="showcase-content__form-input">
						<input type="text" placeholder="Email adress" />
					</div>
					<div className="showcase-content__form-button">
						<button>Get started</button>
					</div>
				</div>
			</div>
		</header>
	)
}