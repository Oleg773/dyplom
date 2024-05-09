import { Link } from 'react-router-dom';
import './breadcrumb.css';

export default function Breadcrumb({ items, className }) {
  return (
    <div className={`${className ?? ''} breadcrumb-container`}>
      <ul className="breadcrumb-list">
        {items.map((item) => (
          <li key={item.name} className="breadcrumb-item">
            {item.link ? <Link to={item.link}>{item.name}</Link> : item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
