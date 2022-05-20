import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
// import About from "./component/About";
import TextForm from "./component/TextForm";
function App() {
  const [mode, setMode] = useState("light");
  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#041336";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar title="MyTextUtils" mode={mode} toggleMode={changeMode} />
      <div className="container mt-5 col-md-8">
        <TextForm heading="Enter the text to analyse" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
