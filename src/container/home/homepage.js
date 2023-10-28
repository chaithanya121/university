import React,{Component} from "react";
// import AOS from "aos";
// import "../../App.css";
// import "aos/dist/aos.css";
import About from '../about/About';
import VideoPage from "../videoSection/VideoPage";
import Courses from "../courses/Courses";
import Message from "../Messages/Message";
import PhotoGallary from "../gallery/PhotoGallery";
import Slider from "../header/Slider";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <> 
            <Slider />
              <About />
              <Message />
              <VideoPage />
              <Courses />
              </>
            //   <PhotoGallary />
         );
    }
}




export default HomePage;