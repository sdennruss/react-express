import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ navigations }) => {
  return (
    <React.Fragment>
      <div className="navigation-container">
        {navigations.map((navigation) => (
          <div key={navigation} className={navigation}>
            <nav>
              <ul className="unordered-items">
                <li className={`listed-${navigation}`} key={navigation}>
                  <Link to={`/${navigation}`} className="linked-items">
                    {navigation}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default NavBar;
