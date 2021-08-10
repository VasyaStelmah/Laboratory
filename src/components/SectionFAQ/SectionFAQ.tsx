import './SectionFAQ.scss';

const linkText = [
  { text:'What is Netflix?', id: 1 },
  { text:'How much does Netflix cost?', id: 2 },
  { text:'Where can I watch?', id: 3 },
  { text:'How do I cancel?', id: 4 },
  { text:'What can I watch on Netflix?', id: 5 },
  { text:'Is Netflix good for kids?', id: 6 },
  { text:'Why am I seeing this Language?', id: 7 }
];

export default function SectionFAQ() {
	return (
    <section className="faq-question-outer">
      <div className="faq-question-inner">
        <div className="faq-question__text-title">Frequently Asked Questions</div>
        <ul className="faq-question__button">
          {linkText.map((item)=>{
            return (
              <a href="#section" key={item.id}>
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