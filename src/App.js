import "./App.css";
import Header from "./Category/Header";
import Slide from "./Category/Slide";
import About from "./Category/About";
import Jobpost from "./Category/Jobpost";
import Footer from "./Category/Footer";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header />
        <Slide />
        <About />
        <Jobpost />
      </div>
      <Footer />
    </div>
  );
}

export default App;
