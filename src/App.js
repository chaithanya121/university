import React from "react";
import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./container/header/Topbar";
import HomePage from "./container/home/homepage";
import Courses from "./container/courses/Courses";
import Message from "./container/Messages/Message";
import Footer from "./container/footer/Footer";
import FullGallery from "./container/gallery/FullGallery";
import Contact from "./components/contact/Contact";
import AboutPage from "./container/about/AboutPage";
import FacultyPage from "./components/Faculty/FacultyPage";
import Event from "./components/Events/Event";
import Notify from "./components/Notification/Notify";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    AOS.init({
      duration: 900,
    });
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Topbar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<AboutPage />}/>
            <Route exact path="/gallery" element={<FullGallery />}/>
            <Route exact path="/courses" element={<Courses />}/>
            <Route exact path="/events" element={  <Event />}/>
            <Route exact path="/notification" element={<Notify />}/>
            <Route exact path="/faculty" element={<FacultyPage />}/>
            {/* <Route exact path="/contact" element={<Contact />}/> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
