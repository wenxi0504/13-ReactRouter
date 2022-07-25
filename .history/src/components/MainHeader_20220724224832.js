import { Link, NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            {/* <Link href="/welcome">Welcome</Link> */}
            <NavLink activeClassName={classes.active} href="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink href="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;