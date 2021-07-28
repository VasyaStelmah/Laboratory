import './SectionCardVideo.scss';
type SectionProps = {
  alt:string,
  src:string,
}
export default function SectionCardVideo({alt,src}:SectionProps) {
	  return (
      <div className="section-card__video">
        <img alt={alt} src={src}/>
      </div>
		)
}