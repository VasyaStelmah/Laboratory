import './SectionCard.scss';
type SectionProps = {
  children: React.ReactNode,
}
export default function SectionCard({children}:SectionProps) {
	  return (
      <section className="section-card-outer">
        <div className="section-card-inner">
          {children}
        </div>
      </section>
		)
}