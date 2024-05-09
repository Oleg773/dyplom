import './categories-list.css';
import { useEffect, useState } from 'react';
import { getCategories } from '../../../api/main';
import List from '../../list/list';
import { neruhomistTypeMap } from '../../../api/data';

export default function CategoriesList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(getCategories());
  }, []);

  return (
    <List
      className="categories-list"
      items={categories.map((category) => ({
        link: `/vyd-neruhomist/${category}`,
        name: neruhomistTypeMap[category],
      }))}
    />
  );
}
