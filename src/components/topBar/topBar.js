import "./topBar.scss";
export default function TopBar() {
  return (
    <div className="topBar">
      <div className="logo">
        <div className="left">
          <img src="assets/uci_logo.svg" alt=""/>
        </div>
        <div className="right">
          <h1>Webreg</h1>
          <h2>University of California, Irvine</h2>
        </div>
      </div>
    </div>
  );
}
