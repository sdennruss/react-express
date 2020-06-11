import React from "react";
import bookImage from "./ebook.jpg";

const EBook = ({ history, onPurchase, isAuthenticated }) => {
  return (
    <React.Fragment>
      <h1>ebook page</h1>
      <div className="ebook-container-1">
        <div className="column-1">
          <p className="main-copy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dapibus
            ultrices in iaculis nunc sed augue lacus. Quam nulla porttitor massa
            id neque aliquam. Ultrices mi tempus imperdiet nulla malesuada. Eros
            in cursus turpis massa tincidunt dui ut ornare lectus. Egestas sed
            sed risus pretium. Lorem dolor sed viverra ipsum. Gravida rutrum
            quisque non tellus. Rutrum tellus pellentesque eu tincidunt tortor.
            Sed blandit libero volutpat sed cras ornare. Et netus et malesuada
            fames ac. Ultrices eros in cursus turpis massa tincidunt dui ut
            ornare. Lacus sed viverra tellus in. Sollicitudin ac orci phasellus
            egestas. Purus in mollis nunc sed. Sollicitudin ac orci phasellus
            sed risus pretium. Lorem dolor sed viverra ipsum. Gravida rutrum
            quisque non tellus. Rutrum tellus pellentesque eu tincidunt tortor.
            Sed blandit libero volutpat sed cras ornare. Et netus et malesuada
            fames ac. Ultrices eros in cursus turpis massa tincidunt dui ut
            ornare. Lacus sed viverra tellus in. Sollicitudin ac orci phasellus
            egestas. Purus in mollis nunc sed. Sollic
          </p>
        </div>

        <div className="column-2">
          <div className="ebook-image">
            <img src={bookImage} style={{ width: 350, height: 350 }} />
          </div>
          <div className="purchase-container">
            <button
              onClick={() => onPurchase(history.push("/checkout"))}
              className="purchase-button"
            >
              check-out
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EBook;
