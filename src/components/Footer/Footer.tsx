import './footer.scss';
type FooterProps = {
    isModal:boolean,
  }
export default function Footer({isModal}:FooterProps) {
	return (
		<footer className={!isModal ? "footer-outer" : "footer - outer__modal"}>
			<div className="footer-inner">
				<div className="footer-text">Questions? Contact us.</div>
				<ul className="footer-cols">
					<li><a href="#section">FAQ</a></li>
					<li><a href="#section">Investor Relations</a></li>
					<li><a href="#section">Privacy</a></li>
					<li><a href="#section">Speed Test</a></li>
					<li><a href="#section">Help Center</a></li>
					<li><a href="#section">Jobs</a></li>
					<li><a href="#section">Cookie Preferences</a></li>
					<li><a href="#section">Legal Notices</a></li>
					<li><a href="#section">Account</a></li>
					<li><a href="#section">Ways to Watch</a></li>
					<li><a href="#section">Corporate Information</a></li>
					<li><a href="#section">Netflix Originals</a></li>
					<li><a href="#section">Media Center</a></li>
					<li><a href="#section">Terms of Use</a></li>
					<li><a href="#section">Contact Us</a></li>
					<li><a href="#section">{""}</a></li>
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