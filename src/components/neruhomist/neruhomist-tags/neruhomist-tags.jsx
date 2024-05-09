import { Link } from 'react-router-dom';
import './neruhomist-tags.css';
import { neruhomistStatusMap } from '../../../api/data';
import Tag from '../../tag/tag';

export default function NeruhomistTags({ status, isRecomended, className }) {
  return (
    <div className={`${className ?? ''} neruhomist-tags`}>
      {isRecomended ? <Tag text="Рекомендовано" /> : null}

      <Link to={`/status-neruhomist/${status}`}>
        <Tag text={neruhomistStatusMap[status]} className="status-tag" />
      </Link>
    </div>
  );
}
