import './SectionCardVideo.scss';

type Props = {
  alt:string,
  src:string,
};
export default function SectionCardVideo({ alt,src }:Props) {
	  return (
      <div className="section-card__video">
        <img alt={alt} src={src}/>
      </div>
		);
}