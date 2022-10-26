import "./index.scss";

import { Body, Header, Sidebar } from "./components";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("page");

  return (
    <div className="wrapper">
      <Header page={page} setPage={setPage} />
      <div className="body">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
