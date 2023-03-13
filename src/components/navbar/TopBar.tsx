import "./TopBar.scss";


interface TopBarProps {
    isMenuOpen: any,
    isSetMenuOpen : any
}


const TopBar = ({isMenuOpen, isSetMenuOpen}: TopBarProps): JSX.Element => {
  return (
    <div className={"topbar " + (isMenuOpen && "active")}>
      <div className="wrapper">
        <div className="right">
          <div className="hamburger" onClick={() => isSetMenuOpen(!isMenuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar
