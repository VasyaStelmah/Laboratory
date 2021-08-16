import './SectionCard.scss';

type Propss = {
  children: React.ReactNode,
};
export default function SectionCard({ children }:Propss) {
  return (
    <section className="section-card-outer">
      <div className="section-card-inner">
        {children}
      </div>
    </section>
  );
}