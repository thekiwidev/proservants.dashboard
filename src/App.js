import "./index.scss";

import { Body, Header, Sidebar } from "./components";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("page");

  return (
    <div className="wrapper">
      <Header page={page} setPage={setPage} />
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
