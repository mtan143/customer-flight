// import * as React from "react";

// interface IMenuProps {
//   isMenuOpen: boolean;
// }

// export const Menu = ({ isMenuOpen }: IMenuProps) => {
//   return (
//     <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
//       <h2>Example App Menu</h2>
//     </div>
//   );
// };
import React from "react";
import "./style.css";

// menu.propTypes = {
//     isMenuOpen: PropTypes.bool,
// };

export const Menu = ({ isMenuOpen }) => {
  return (
    <div
      style={{ flexDirection: "column" }}
      className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}
    >
      <h2>Example App Menu</h2>
      <ul style={{ listStyle: "none" }}>
        <li className="menu">Home</li>
        <li className="menu">About</li>
        <li className="menu">Contact</li>
        <li className="menu">News</li>
      </ul>




      
    </div>
  );
};

