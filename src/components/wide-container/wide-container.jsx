import './wide-container.css';

export default function WideContainer({ children, className }) {
  return <div className={`${className ?? ''} wide-container`}>{children}</div>;
}
