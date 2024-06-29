import {categories} from '../../constans';
import {NavLink} from 'react-router-dom';

const Category = () => {
  return (
    <div className="d-flex flex-column">
      <NavLink className="link-opacity-75-hover link-secondary" to="/">All</NavLink>
      {categories.map((category) => (
        <NavLink
          key={category.id}
          to={`/quotes/${category.id}`}
          className="link-opacity-75-hover link-secondary"
        >
          {category.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Category;