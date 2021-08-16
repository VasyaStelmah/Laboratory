import './SectionCardVideo.scss';

type Propss = {
  alt:string,
  src:string,
};
export default function SectionCardVideo({ alt,src }:Propss) {
  return (
    <div className="section-card__video">
      <img alt={alt} src={src}/>
    </div>
  );
}