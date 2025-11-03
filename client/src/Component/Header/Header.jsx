
// import React from "react";
// import logo from "../../assets/images/icons/logo-sm.png";
// import search from "../../assets/images/icons/search-icon-sm.png";
// import cart from "../../assets/images/icons/cart-sm.png";
// import { Link } from "react-router-dom";

// export const Header = () => {

//   return (
//     <div className="nav-wrapper fixed-top">
//       <div className="container">
//         <nav className="navbar navbar-toggleable-sm navbar-expand-md">
//           <button
//             className="navbar-toggler navbar-toggler-right"
//             type="button"
//             data-toggle="collapse"
//             data-target=".navbar-collapse"
//           >
//             ☰
//           </button>
//           <Link className="navbar-brand mx-auto" to="#">
//             <img src={logo} alt="Logo" />
//           </Link>

//           <div className="navbar-collapse collapse">
//             <ul className="navbar-nav nav-justified w-100 nav-fill">
//               <li className="nav-item">
//                 <Link className="nav-link js-scroll-trigger" to="/mac/">
//                   Mac
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link js-scroll-trigger" to="#">
//                   iphone
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link js-scroll-trigger" to="#">
//                   ipad
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link js-scroll-trigger" to="#">
//                   watch
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link js-scroll-trigger" to="#">
//                   tv
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link js-scroll-trigger" to="#">
//                   Music
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link js-scroll-trigger" to="#">
//                   Support
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link js-scroll-trigger" to="/search/">
//                   <img
//                     src={search}
//                     alt="Search icon for searching the Apple website"
//                   />
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link js-scroll-trigger" to="/cart/">
//                   <img
//                     src={cart}
//                     alt="Shopping cart icon for accessing the cart in the Apple website navigation bar"
//                   />
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

import React from "react";
import apple_logo from "../../assets/icons/logo-sm.png";
import cart_icon from "../../assets/icons/cart-sm.png";
import search_icon from "../../assets/icons/search-icon-sm.png";
import NavbarList from "../NavbarList";

import { Link } from "react-router";

import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <div className="nav-wrapper fixed-top">
      <Container>
        <Nav>
          <Navbar className="w-100" collapseOnSelect expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Link className="navbar-brand mx-auto" to="/">
              <img src={apple_logo} alt="apple" />
            </Link>

            <Navbar.Collapse id="basic-navbar-nav">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <NavbarList LinkUrl="/mac/" LinkName="Mac" />
                <NavbarList LinkUrl="/iphone/" LinkName="iphone" />
                <NavbarList LinkUrl="/ipad/" LinkName="ipad" />
                <NavbarList LinkUrl="/watch/" LinkName="watch" />
                <NavbarList LinkUrl="/tv/" LinkName="tv" />
                <NavbarList LinkUrl="/Music/" LinkName="Music" />
                <NavbarList LinkUrl="/Support/" LinkName="Support" />
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/search/">
                    <img src={search_icon} alt="search" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/cart/">
                    <img src={cart_icon} alt="cart" />
                  </Link>
                </li>
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </Nav>
      </Container>
    </div>
  );
}

export default Header;