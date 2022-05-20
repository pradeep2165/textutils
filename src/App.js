import { useState } from "react";
import "./App.css";
import Alert from "./component/Alert";
import Navbar from "./component/Navbar";
import About from "./component/About";
import TextForm from "./component/TextForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#041336";
      document.title = "Dark Mode";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "Light Mode";
      showAlert("Light Mode Enabled", "success");
    }
  };

  const showAlert = (message, AlertType) => {
    setAlert({
      msg: message,
      type: AlertType,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Router>
        <Navbar title="MyTextUtils" mode={mode} toggleMode={changeMode} />
        <Alert alert={alert} />
        <div className="container my-2 col-md-8">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyse"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
