import './LendingPage.css';
export default function Footer() {
	return (
		<footer className="footer-outer">
			<div className="footer-inner">
				<div className="footer-text">Questions? Contact us.</div>
				<ul className="footer-cols">
					<li><a href="#">FAQ</a></li>
					<li><a href="#">Investor Relations</a></li>
					<li><a href="#">Privacy</a></li>
					<li><a href="#">Speed Test</a></li>
					<li><a href="#">Help Center</a></li>
					<li><a href="#">Jobs</a></li>
					<li><a href="#">Cookie Preferences</a></li>
					<li><a href="#">Legal Notices</a></li>
					<li><a href="#">Account</a></li>
					<li><a href="#">Ways to Watch</a></li>
					<li><a href="#">Corporate Information</a></li>
					<li><a href="#">Netflix Originals</a></li>
					<li><a href="#">Media Center</a></li>
					<li><a href="#">Terms of Use</a></li>
					<li><a href="#">Contact Us</a></li>
					<li><a href="#"></a></li>
				</ul>
				<div className="showcase-top__right-lang lang-footer">
					<select>
						<option value="/by/" lang="en">English</option>
						<option value="/by-ru/" lang="ru">Русский</option>
					</select>
				</div>
				<div className="footer-text">Netflix Belarus</div>
			</div>
		</footer>
	)
}