import "./topBar.scss";
import { Button, IconButton} from "@mui/material";
import { Chat, Backpack } from "@mui/icons-material";
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
        ? <div className="middleButtons"><a href="/pouch">UCI Home</a>
        <a href="/pouch">Schedule of Classes</a>
        <a href="/pouch">Student Access</a></div>
        : <div className="middleText"><h1>Petr Pouch</h1></div>
        }
      </div>
      <div className="right">
      {location.pathname === "/" 
        ? <Button variant="contained" className="logOut">Log Out</Button>
        : <div className="icons">
          <IconButton>
            <Chat className="chat"/>
          </IconButton>
          <IconButton>
            <Backpack className="backpack"/>
          </IconButton>
        </div>
        }
        
      </div>
    </div>
  );
}
