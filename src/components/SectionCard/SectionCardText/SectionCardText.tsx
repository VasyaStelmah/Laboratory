import './SectionCardText.scss';

type Propss = {
  title: string;
  subtitle: string;
};

export default function SectionCardText({ title, subtitle }: Propss) {
  return (
    <div className="section-card__text">
      <div className="section-card__text-title">{title}</div>
      <div className="section-card__text-subtitle">{subtitle}</div>
    </div>
  );
}
