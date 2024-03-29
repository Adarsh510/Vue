// import React, { useState, useEffect } from "react";
// import { Link } from "react-scroll";
//
// const ImageLanding = () => {
//   // List of background images
//   const images = [
//     "https://images.pexels.com/photos/7488221/pexels-photo-7488221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "https://images.pexels.com/photos/7188894/pexels-photo-7188894.jpeg",
//     "https://i.pcmag.com/imagery/articles/007OEmxN7mGIsAUtQFSIa2g-2..v1675708680.jpg",
//     "https://images.pexels.com/photos/7695415/pexels-photo-7695415.jpeg",
//     "https://images.pexels.com/photos/7188804/pexels-photo-7188804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//      "https://images.pexels.com/photos/7265371/pexels-photo-7265371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "https://images.pexels.com/photos/8327775/pexels-photo-8327775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     // Add more image URLs here
//   ];
//
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//
//   useEffect(() => {
//     // Change background image every 5 seconds
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000);
//
//     return () => clearInterval(interval);
//   }, [images.length]);
//
//   return (
//     <React.Fragment>
//       <div
//         className="backgroundImage"
//         style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
//       >
//         <div className="title">
//           <p className="header">ScanVue</p>
//           <p className="text">
//             <span className="borderText">Empowering independence for those who see the world differently.</span>
//           </p>
//         </div>
//         <Link
//           to="Features"
//           activeClass="active"
//           spy={true}
//           smooth={true}
//           offset={-70}
//           duration={500}
//         >
//           <button className="btn btn-primary p-3 donateBtn">
//             Explore Features
//           </button>
//         </Link>
//       </div>
//
//       <style jsx>{`
//         .backgroundImage {
//           background-size: cover;
//           background-position: center;
//           height: 100vh;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           flex-direction: column;
//           color: white;
//           font-family: 'Arial', sans-serif; /* Change font-family */
//         }
//
//         .title {
//           text-align: center;
//         }
//
//         .header {
//           font-size: 3rem; /* Increase font size */
//           font-weight: bold;
//           border-bottom: 4px solid white; /* Add border to header */
//           padding-bottom: 10px; /* Add padding to bottom */
//           text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add shadow effect */
//         }
//
//         .text {
//           font-size: 1.5rem; /* Increase font size */
//           margin-top: 1rem; /* Add some spacing */
//         }
//
//         .borderText {
//           text-shadow: 1px 1px 2px black; /* Add small border to text */
//         }
//
//         .donateBtn {
//           margin-top: 2rem; /* Add margin to the button */
//         }
//       `}</style>
//     </React.Fragment>
//   );
// };
//
// export default ImageLanding;






///////////////////////////////////////////////// landing_page.jsx ---- Go to Assistant  /////////////////////////////////////

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useHistory } from "react-router-dom";

const ImageLanding = () => {
  const history = useHistory();

  const images = [
    "https://images.pexels.com/photos/7488221/pexels-photo-7488221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7188894/pexels-photo-7188894.jpeg",
    "https://i.pcmag.com/imagery/articles/007OEmxN7mGIsAUtQFSIa2g-2..v1675708680.jpg",
    "https://images.pexels.com/photos/7695415/pexels-photo-7695415.jpeg",
    "https://images.pexels.com/photos/7188804/pexels-photo-7188804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7265371/pexels-photo-7265371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8327775/pexels-photo-8327775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleExploreFeatures = () => {
    history.push("/assistant");
  };

  return (
    <React.Fragment>
      <div
        className="backgroundImage"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className="title">
          <p className="header">ScanVue</p>
          <p className="text">
            <span className="borderText">
              Empowering independence for those who see the world differently.
            </span>
          </p>
        </div>
        <Link
          to="Features"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button
            className="btn btn-primary p-3 donateBtn"
            onClick={handleExploreFeatures}
          >
            Touch for aid
          </button>
        </Link>
      </div>

      <style jsx>{`
        .backgroundImage {
          background-size: cover;
          background-position: center;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          color: white;
          font-family: 'Arial', sans-serif;
        }

        .title {
          text-align: center;
        }

        .header {
          font-size: 3rem;
          font-weight: bold;
          border-bottom: 4px solid white;
          padding-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .text {
          font-size: 1.5rem;
          margin-top: 1rem;
        }

        .borderText {
          text-shadow: 1px 1px 2px black;
        }

        .donateBtn {
          margin-top: 2rem;
        }
      `}</style>
    </React.Fragment>
  );
};

export default ImageLanding;
