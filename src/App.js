import "./App.css";
import Navbar from "./component/Navbar";
// import About from "./component/About";
import TextForm from "./component/TextForm";
function App() {
  return (
    <>
      <Navbar title="MyTextUtils" />
      <div className="container mt-5 col-md-8">
        <TextForm heading="Enter the text to analyse" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
