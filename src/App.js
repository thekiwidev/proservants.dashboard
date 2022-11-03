import "./index.scss";

import { Body, Header, Sidebar } from "./components";
import { useState } from "react";
// import DomContextProvider from "./contexts/DomContext";

function App() {
  const [page, setPage] = useState("page");
  const [sidebarClassList, setSidebarClassList] = useState({
    classes: "sidebar-container",
  });

  const handleMenuCLick = () => {
    if (sidebarClassList.classes !== "sidebar-container active") {
      setSidebarClassList({
        classes: "sidebar-container active",
      });
    } else {
      setSidebarClassList({
        classes: "sidebar-container",
      });
    }
  };

  return (
    <div className="wrapper">
      <Header page={page} setPage={setPage} handleMenuCLick={handleMenuCLick} />
      <div className="body">
        <Sidebar classList={sidebarClassList} />
        <Body />
      </div>
    </div>
  );
}

export default App;
