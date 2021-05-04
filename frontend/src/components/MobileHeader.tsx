import { ReactComponent as Logo } from "../assets/images/logo.svg";

const MobileHeader = () : JSX.Element => {
  return (
    <div className="pc-mob-header pc-header">
      <div className="pcm-logo">
        <Logo className="logo logo-lg" />
      </div>
      <div className="pcm-toolbar">
        <a href="#!" className="pc-head-link" id="mobile-collapse">
          <div className="hamburger hamburger--arrowturn">
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </div>
        </a>
        <a href="#!" className="pc-head-link" id="headerdrp-collapse">
          <i data-feather="align-right"></i>
        </a>
        <a href="#!" className="pc-head-link" id="header-collapse">
          <i data-feather="more-vertical"></i>
        </a>
      </div>
    </div>
  );
}

export default MobileHeader;
