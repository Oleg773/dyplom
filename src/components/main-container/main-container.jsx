import './main-container.css';

export default function MainContainer({ children, className }) {
  return (
    <div className="main-container">
      <div className={`${className ?? ''} main-container-box`}>{children}</div>
    </div>
  );
}
