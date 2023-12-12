import { NavLink } from "react-router-dom";
import "./Header.css";
export const Header = () => {
  return (
    <div className="headerContainer">
      <div className="logo">
        <NavLink to="/" className="navLink">
          <h1>Logo go Home</h1>
        </NavLink>
      </div>
      <div className="navBar">
        <ul>
          <li>
            <NavLink to="/page1" className="navLink">
              Nav 1
            </NavLink>
          </li>
          <li>
            <NavLink to="/page2" className="navLink">
              Nav 2
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
