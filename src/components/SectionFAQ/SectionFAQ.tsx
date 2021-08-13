import './SectionFAQ.scss';
import { linkText } from './content';

export default function SectionFAQ() {
	return (
    <section className="faq-question-outer">
      <div className="faq-question-inner">
        <div className="faq-question__text-title">Frequently Asked Questions</div>
        <ul className="faq-question__button">
          {linkText.map((item)=>{
            return (
              <a href="#sections" key={item.id}>
                <h2>{item.text}</h2>
              </a>
            );
          })}
        </ul>
        <h2 className="faq-question-subtitle">Ready to watch? Enter your email to create or restart your membership.</h2>
        <div className="faq-question__form">
          <div className="faq-question__form-input">
            <input type="text" placeholder="Email adress" />
          </div>
          <div className="faq-question__form-button">
            <button type='button'>Get started</button>
          </div>
        </div>
      </div>
    </section>
	);
}