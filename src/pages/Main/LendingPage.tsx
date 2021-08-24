import { useState } from 'react';
import './LendingPage.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionCard from '../../components/SectionCard';
import SectionCardText from '../../components/SectionCard/SectionCardText';
import SectionCardVideo from '../../components/SectionCard/SectionCardVideo';
import SectionFAQ from '../../components/SectionFAQ';
import { sectionCard } from './content';

export default function LendingPage() {
  const [isModal, setIsModal] = useState<boolean>(false);
  return (
    <>
      <Header isModal={isModal} setIsModal={setIsModal} />
      {!isModal ? (
        <>
          {sectionCard.map((obj, index) => {
            return index % 2 === 0 ? (
              <SectionCard key={obj.title}>
                <SectionCardText title={obj.title} subtitle={obj.subtitle} />
                <SectionCardVideo alt={obj.alt} src={obj.src} />
              </SectionCard>
            ) : (
              <SectionCard key={obj.title}>
                <SectionCardVideo alt={obj.alt} src={obj.src} />
                <SectionCardText title={obj.title} subtitle={obj.subtitle} />
              </SectionCard>
            );
          })}
          <SectionFAQ />
          <Footer isModal={isModal} />
        </>
      ) : null}
    </>
  );
}
