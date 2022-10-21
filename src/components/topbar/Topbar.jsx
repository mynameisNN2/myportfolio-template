import "./topbar.scss";

export default function Topbar({ setMenuOpen, menuOpen }) {

  return (

    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">

        <div className="left">
          <a href="#intro" className="logo">Nima.Noorali</a>
          <div className="itemContainer">
            <span>+98-993-148-0669</span>
          </div>
          <div className="itemContainer">
            <span>noorali_nima@yahoo.com</span>
          </div>
        </div>

        <div className="right">

          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>

        </div>
      </div>
    </div>
  );
}
