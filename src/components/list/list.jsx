import { Link } from 'react-router-dom';
import './list.css';

export default function List({ items, className }) {
  return (
    <ul className={`${className ?? ''} list`}>
      {items.map((item) => (
        <li key={item.name + item.link} className="list-item">
          {item.link ? <Link to={item.link}>{item.name}</Link> : item.name}
        </li>
      ))}
    </ul>
  );
}
