import React, { Component, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import "./Home-page.css"
import ImageSlider from './Slider/Slider';
import { SliderData } from './Slider/SliderData';
  
const Home = () => {

    return(
        <div className='homepage'>
            {/* <BrowserRouter> */}
            <div data-testid= "picHeader" className='happening-this-week'>
                <img src={require('../../images/happening-this-week.png')} alt="pic"/>
            </div>
            <div data-testid="slider" className='slidey'>
                <ImageSlider slides={SliderData} />
            </div>
            {/* </BrowserRouter> */}
        </div>
    )
}

export default Home; 








// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// export default class Home extends Component {
    
//     render() {
//         return (
            // <div style={{
            //     color: "#000", 
            //     paddingTop: "30px",
            //     paddingLeft: "100px",
            //     fontSize: "45px",
            //     fontStyle: "italic",
            // }}> What's New This Week: 
            //     <div className = "carousel">
            // <Carousel showArrows={true} autoplay>
            //     <div>
            //         <img src={require('../Home/home-images/pic1.png')} alt="Photo1" />
            //         <p className="legend">Legend 1</p>
            //     </div>
            //     <div>
            //         <img src={require('../Home/home-images/pic2.png')} alt="Photo2" />
            //         <p className="legend">Legend 2</p>
            //     </div>
            //     <div>
            //         <img src={require('../Home/home-images/pic3.png')} alt="Photo3" />
            //         <p className="legend">Legend 3</p>
            //     </div>
            // </Carousel>
            // </div>
            // </div>
//             <div id="fullpage">
//                 <div className="section">Some section</div>
//                 <div className="section">Some section</div>
//                 <div className="section">Some section</div>
//                 <div className="section">Some section</div>
// </div>
//         );
//     }
// }


// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-c