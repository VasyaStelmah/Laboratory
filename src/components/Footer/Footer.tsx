import { NavLink } from "react-router-dom";
import './footer.scss';
import { content } from "./content";

type Propss = {
    isModal:boolean,
  };
export default function Footer({ isModal }:Propss) {
	return (
		<footer className={!isModal ? "footer-outer" : "footer - outer__modal"}>
			<div className="footer-inner">
				<div className="footer-text">Questions? Contact us.</div>
				<ul className="footer-cols">
          {content.map((obj) => {
            return <li key={obj.id}><NavLink to={obj.link}>{obj.text}</NavLink></li>;
          })}
				</ul>
				<div className="section-header__right-lang lang-footer">
					<select>
						<option value="/by/" lang="en">English</option>
						<option value="/by-ru/" lang="ru">Русский</option>
					</select>
				</div>
				<div className="footer-text">Netflix Belarus</div>
			</div>
		</footer>
	);
}