import { Container, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const TopBarComponent = () => {
  return (
    <Navbar className="navbar-light">
      <Container>
        <Link to="/" className="navbar-brand">
          Logo
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink to="/">Main Page</NavLink>
          </li>
        </ul>
      </Container>
    </Navbar>
  );
};
export default TopBarComponent;
