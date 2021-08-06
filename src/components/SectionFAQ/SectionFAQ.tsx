import './SectionFAQ.scss';

const linkText = [
  'What is Netflix?',
  'How much does Netflix cost?',
  'Where can I watch?',
  'How do I cancel?',
  'What can I watch on Netflix?',
  'Is Netflix good for kids?',
  'Why am I seeing this Language?'
];

export default function SectionFAQ() {
	return (
    <section className="faq-question-outer">
      <div className="faq-question-inner">
        <div className="faq-question__text-title">Frequently Asked Questions</div>
        <ul className="faq-question__button">
          {linkText.map((item,index)=>{
            return (
              <a href="#section" key={index}>
                <h2>{item}</h2>
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
            <button>Get started</button>
          </div>
        </div>
      </div>
    </section>
	);
}