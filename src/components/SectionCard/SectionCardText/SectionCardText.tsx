import './SectionCardText.scss';

type Props = {
  title:string,
  subtitle:string
};
export default function SectionCardText({ title,subtitle }:Props) {
	  return (
        <div className="section-card__text">
          <div className="section-card__text-title">{title}</div>
          <div className="section-card__text-subtitle">{subtitle}</div>
        </div>
		);
}