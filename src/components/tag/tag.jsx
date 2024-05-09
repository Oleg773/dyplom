import './tag.css';

export default function Tag({ text, className }) {
  return <div className={`${className ?? ''} tag`}>{text}</div>;
}
