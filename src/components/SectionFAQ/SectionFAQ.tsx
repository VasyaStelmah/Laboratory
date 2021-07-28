import './SectionFAQ.scss';

export default function SectionFAQ() {
	  return (
      <section className="faq-question-outer">
        <div className="faq-question-inner">
          <div className="faq-question__text-title">Frequently Asked Questions</div>
          <ul className="faq-question__button">
            <a href="#section">
              <h2>What is Netflix?</h2>
            </a>
            <a href="#section">
              <h2>How much does Netflix cost?</h2>
            </a>
            <a href="#section">
              <h2>Where can I watch?</h2>
            </a>
            <a href="#section">
              <h2>How do I cancel?</h2>
            </a>
            <a href="#section">
              <h2>What can I watch on Netflix?</h2>
            </a>
            <a href="#section">
              <h2>Is Netflix good for kids?</h2>
            </a>
            <a href="#section">
              <h2>Why am I seeing this Language?</h2>
            </a>
          </ul>
          <h2 className="faq-question-subtitle">Ready to watch? Enter your email to create or restart your membership.</h2>
          <div className="faq-question__form">
            <div className="faq-question__form-input">
              <input type="text" placeholder="Email adress" />
            </div>
            <div className="faq-question__form-button"><button>Get started</button></div>
          </div>
        </div>
      </section>
		)
}