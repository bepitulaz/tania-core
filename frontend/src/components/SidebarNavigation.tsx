import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as LogoSm} from "../assets/images/logo-sm.svg";

const SidebarNavigation = () : JSX.Element => {
  return(
    <nav className="pc-sidebar menuclass">
      <div className="navbar-wrapper">
        <div className="m-header">
          <a href="index.html" className="b-brand">
            <Logo className="logo logo-lg" />
            <LogoSm className="logo logo-sm" />
          </a>
        </div>
        <div className="navbar-content">
          <ul className="pc-navbar">
          <li className="pc-item">
            <a href="/" className="pc-link">
              <span className="pc-micon">
                <i className="material-icons-two-tone">home</i>
              </span>
              <span className="pc-mtext">Dashboard</span>
            </a>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default SidebarNavigation;
