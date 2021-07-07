import './LendingPage.css';
export default function App() {
  return (
    <>
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
      <section className="our-story-card-outer">
        <div className="our-story-card-inner">
          <div className="our-story-card__text">
            <div className="our-story-card__text-title">Enjoy on your TV.</div>
            <div className="our-story-card__text-subtitle">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</div>
          </div>
          <div className="our-story-card__video">
            <img alt="Watch on TV, PS, Xbox" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
          </div>
        </div>
      </section>
      <section className="our-story-card-outer">
        <div className="our-story-card-inner">
          <div className="our-story-card__video">
            <img alt="watch offline" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
          </div>
          <div className="our-story-card__text">
            <div className="our-story-card__text-title">Download your shows to watch offline.</div>
            <div className="our-story-card__text-subtitle">Save your favorites easily and always have something to watch</div>
          </div>
        </div>
      </section>
      <section className="our-story-card-outer">
        <div className="our-story-card-inner">
          <div className="our-story-card__text">
            <div className="our-story-card__text-title">Watch everywhere.</div>
            <div className="our-story-card__text-subtitle">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</div>
          </div>
          <div className="our-story-card__video">
            <img alt="Stream unlimited movies" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" />
          </div>
        </div>
      </section>
      <section className="our-story-card-outer">
        <div className="our-story-card-inner">
          <div className="our-story-card__video">
            <img alt="profiles for kids" src='https://occ-0-4923-2774.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd' />
          </div>
          <div className="our-story-card__text">
            <div className="our-story-card__text-title">Create profiles for kids.</div>
            <div className="our-story-card__text-subtitle">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</div>
          </div>
        </div>
      </section>
      <section className="faq-question-outer">
        <div className="faq-question-inner">
          <div className="faq-question__text-title">Frequently Asked Questions</div>
          <ul className="faq-question__button">
            <a href="#">
              <h2>What is Netflix?</h2>
            </a>
            <a href="#">
              <h2>How much does Netflix cost?</h2>
            </a>
            <a href="#">
              <h2>Where can I watch?</h2>
            </a>
            <a href="#">
              <h2>How do I cancel?</h2>
            </a>
            <a href="#">
              <h2>What can I watch on Netflix?</h2>
            </a>
            <a href="#">
              <h2>Is Netflix good for kids?</h2>
            </a>
            <a href="#">
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
    </>
  );
};