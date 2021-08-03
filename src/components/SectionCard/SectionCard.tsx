import './SectionCard.scss';

type Props = {
  children: React.ReactNode,
};
export default function SectionCard({ children }:Props) {
	  return (
      <section className="section-card-outer">
        <div className="section-card-inner">
          {children}
        </div>
      </section>
		);
}