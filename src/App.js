import "./index.scss";

import { Body, Header, Sidebar } from "./components";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
