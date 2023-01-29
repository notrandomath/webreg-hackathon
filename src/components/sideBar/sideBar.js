import "./sideBar.scss";
import { sideBarItems } from "../../data";

export default function SideBar() {


  return (
    <div className="sideBar">
      {sideBarItems.map((item) => {
        return (
          <div className="sideBarEntry">
            <img src={item.icon} alt="" className="icon"/>
            {item.title}
          </div>
        );
      })}
    </div>
  );
}
