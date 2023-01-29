import "./topBar.scss";
import Button from "@mui/material/Button";

export default function TopBar() {
  return (
    <div className="topBar">
      <div className="logo">
        <div className="left">
          <img src="assets/uci_logo.svg" alt=""/>
        </div>
        <div className="right">
          <h1><b>Webreg</b></h1>
          <h2>University of California, Irvine</h2>
        </div>
      </div>
      <div className="buttons">
        <a href="">UCI Home</a>
        <a href="">Schedule of Classes</a>
        <a href="">Student Access</a>
        <Button variant="contained" className="logOut">Log Out</Button>
      </div>
    </div>
  );
}
