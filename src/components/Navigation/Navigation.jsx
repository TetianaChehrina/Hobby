import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">VideoPage</NavLink>
          </li>
          <li>
            <NavLink to="/images">ImagePage</NavLink>
          </li>
          <li>
            <NavLink to="/news">NewsPage</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
