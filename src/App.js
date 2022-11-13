import { React } from "react";
import ContentLeft from "./components/Content/ContentLeft";
import ContentRight from "./components/Content/ContentRight";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row">
      <Sidebar />
      <ContentLeft />
      <ContentRight />
    </div>
  );
}

export default App;
