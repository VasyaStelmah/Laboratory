import React, { useState } from 'react';
import './LendingPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
export default function App() {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <Header isModal={isModal} setIsModal={setIsModal} />
      {!isModal
        ? <>
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
          <Footer />
        </>
        : null}
    </>
  );
};