import "./topBar.scss";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";

export default function TopBar() {
  let location = useLocation();

  return (
    <div className="topBar">
      <div className="left">
        <div className="leftLogo">
          <img src="assets/uci_logo.svg" alt=""/>
        </div>
        <div className="rightLogo">
          <h1><b>Webreg</b></h1>
          <h2>University of California, Irvine</h2>
        </div>
      </div>
      <div className="middle">
        {location.pathname === "/" 
        ? <div className="middleButtons"><a href="">UCI Home</a>
        <a href="">Schedule of Classes</a>
        <a href="">Student Access</a></div>
        : <div className="middleText"><h1>Petr Pouch</h1></div>
        }
      </div>
      <div className="right">
        <Button variant="contained" className="logOut">Log Out</Button>
      </div>
    </div>
  );
}
