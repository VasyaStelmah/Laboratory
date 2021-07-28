import './SectionCardText.scss';
type SectionProps = {
  title:string,
  subtitle:string
}
export default function SectionCardText({title,subtitle}:SectionProps) {
	  return (
        <div className="section-card__text">
          <div className="section-card__text-title">{title}</div>
          <div className="section-card__text-subtitle">{subtitle}</div>
        </div>
		)
}