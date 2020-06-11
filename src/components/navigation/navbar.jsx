import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ navigations }) => {
  const [navClass, setNavClass] = useState();
  return (
    <React.Fragment>
      <div className="navigation-container">
        {navigations.map((navigation) => (
          <div key={navigation} className={navigation}>
            <nav>
              <ul className="unordered-items">
                <li className={`listed-${navigation}`} key={navigation}>
                  <Link
                    onMouseOver={() => setNavClass(`linked-${navigation}`)}
                    to={`/${navigation}`}
                    className={navClass}
                  >
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
