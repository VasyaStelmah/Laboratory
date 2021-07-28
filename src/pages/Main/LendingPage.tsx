import { useState } from 'react';
import './LendingPage.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionCard from '../../components/SectionCard';
import SectionCardText from '../../components/SectionCard/SectionCardText';
import SectionCardVideo from '../../components/SectionCard/SectionCardVideo';
import SectionFAQ from '../../components/SectionFAQ'
export default function App() {
  const [isModal, setIsModal]= useState<boolean>(false);
  return (
    <>
      <Header isModal={isModal} setIsModal={setIsModal} />
      {!isModal
        ? <>
            <SectionCard>
              <SectionCardText title='Enjoy on your TV.' subtitle='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.' />
              <SectionCardVideo alt="Watch on TV, PS, Xbox" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
            </SectionCard>
            <SectionCard>
              <SectionCardVideo alt="watch offline" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
              <SectionCardText title='Download your shows to watch offline.' subtitle='Save your favorites easily and always have something to watch'/>
            </SectionCard>
            <SectionCard>
              <SectionCardText title='Watch everywhere.' subtitle='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.'/>
              <SectionCardVideo alt="Stream unlimited movies" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" />
            </SectionCard>
            <SectionCard>
              <SectionCardVideo alt="profiles for kids" src='https://occ-0-4923-2774.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd' />
              <SectionCardText title='Create profiles for kids.' subtitle='Send kids on adventures with their favorite characters in a space made just for them—free with your membership.'/>
            </SectionCard>
            <SectionFAQ/>
          <Footer isModal={isModal} />
        </>
        : null}
    </>
  );
};