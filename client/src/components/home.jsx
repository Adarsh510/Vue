// import React from "react";
// import Feature from "./FeatureBlock";
// import ImageLanding from "./image_landing";
// import NobleCause from "./nobelCause";
//
// const Home = () => {
//   return (
//     <React.Fragment>
//       <ImageLanding />
//       <section>
//         <div
//           className="row"
//           style={{
//             textAlign: "center",
//             paddingTop: "20px",
//             background: "#f5f5f5",
//           }}
//         >
//           <h2
//             style={{
//               fontFamily: "Georgia, Times, serif",
//               fontSize: "45px",
//               fontWeight: "bolder",
//             }}
//           >
//             Introduction
//           </h2>
//           <div
//             style={{
//               padding: 15,
//               margin: 2,
//
//               textAlign: "center",
//             }}
//           >
//             The World Health Organization estimates that a staggering 285 million
//             people globally have visual impairments,with 60 million residing in India alone.
//             This translates to a significant challenge for these individuals,
//             as they often struggle to perceive and interact with their surroundings.
//             My project aims to leverage the power of cutting-edge technologies like Artificial Intelligence,
//             Machine Learning, and Image and Text Recognition to bridge this gap. By harnessing these advancements,
//             I hope to empower visually impaired people with a new way to experience their environment.
//             Ultimately, this project aspires to provide support and assistance to visually impaired individuals,
//             fostering greater independence and interaction with the world around them.
//             <span>
//               {"   "}
// {/*               <button className="btn btn-sm btn-info">For more info...</button> */}
//             </span>
//           </div>
//         </div>
//       </section>
//
//       <section id="Features">
//         <div className="row" style={{ textAlign: "center" }}>
//           <h2
//             style={{
//               fontFamily: "Georgia, Times, serif",
//               fontSize: "45px",
//               fontWeight: "bolder",
//               paddingTop: "30px",
//             }}
//           >
//             Features
//           </h2>
//
//           <div
//             style={{
//               padding: 12,
//               margin: 15,
//               backgroundColor: "rgba(235, 255, 251, 0.1)",
//             }}
//           >
//             <div className="container">
//               <div className="row justify-content-md-center">
//                 <Feature to="/object-detection" title="Object Detection" />
//
//                 <Feature to="/face-recognition" title="Face Recognition" />
//
//                 <Feature to="/image-to-text" title="Image to text" />
//
//                 <Feature to="/text-to-speech" title="Text to speech" />
//
//                 <Feature to="/speech-to-text" title="Speech to text" />
//
//                 <Feature to="/assistant" title="Assistant" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//
//       <NobleCause />
//     </React.Fragment>
//   );
// };
//
// export default Home;






/////////////////////////////////////////////////





import React from "react";
import Feature from "./FeatureBlock";
import ImageLanding from "./image_landing";
import NobleCause from "./nobelCause";

const Home = () => {
  return (
    <React.Fragment>
      <ImageLanding />
      <section>
        <div
          className="row"
          style={{
            textAlign: "center",
            paddingTop: "20px",
            background: "#f5f5f5",
            fontFamily: "Arial, sans-serif", // Updated font family to Arial
          }}
        >
          <h2
            style={{
              fontSize: "45px",
              fontWeight: "bolder",
            }}
          >
            Introduction
          </h2>
          <div
            style={{
              padding: 15,
              margin: 2,
              textAlign: "center",
              fontSize: "16px", // Updated font size
              fontFamily: "Arial, sans-serif", // Updated font family to Arial
            }}
          >
            The World Health Organization estimates that a staggering 285 million
            people globally have visual impairments, with 60 million residing in India alone.
            This translates to a significant challenge for these individuals,
            as they often struggle to perceive and interact with their surroundings.
            My project aims to leverage the power of cutting-edge technologies like Artificial Intelligence,
            Machine Learning, and Image and Text Recognition to bridge this gap. By harnessing these advancements,
            I hope to empower visually impaired people with a new way to experience their environment.
            Ultimately, this project aspires to provide support and assistance to visually impaired individuals,
            fostering greater independence and interaction with the world around them.
            <span>
              {/* <button className="btn btn-sm btn-info">For more info...</button> */}
            </span>
          </div>
        </div>
      </section>

      <section id="Features">
        <div className="row" style={{ textAlign: "center" }}>
          <h2
            style={{
              fontSize: "45px",
              fontWeight: "bolder",
              paddingTop: "30px",
              fontFamily: "Arial, sans-serif", // Updated font family to Arial
            }}
          >
            Features
          </h2>

          <div
            style={{
              padding: 12,
              margin: 15,
              backgroundColor: "rgba(235, 255, 251, 0.1)",
            }}
          >
            <div className="container">
              <div className="row justify-content-md-center">
                <Feature to="/object-detection" title="Object Detection" />

                <Feature to="/face-recognition" title="Face Recognition" />

                <Feature to="/image-to-text" title="Image to text" />

                <Feature to="/text-to-speech" title="Text to speech" />

                <Feature to="/speech-to-text" title="Speech to text" />

                <Feature to="/assistant" title="Assistant" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <NobleCause />
    </React.Fragment>
  );
};

export default Home;
