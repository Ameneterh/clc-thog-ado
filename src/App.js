import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./ContentPages/LandingPage";
import About from "./AboutPage/About";
import SermonPosts from "./Sermons/SermonPosts";
import BlogPosts from "./Blog/BlogsPage";
import ContactPage from "./Contact/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/sermons" element={<SermonPosts />}></Route>
        <Route path="/e-flyers" element={<BlogPosts />}></Route>
        <Route path="/contact-us" element={<ContactPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
