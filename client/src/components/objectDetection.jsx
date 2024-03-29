// import React, { useState } from "react";
// import FileUpload from "./FileUpload";
// import { useSpeechSynthesis } from "react-speech-kit";
//
// const ObjectDetection = () => {
//   const [imageInputURL, setImageInputUrl] = useState("");
//   const [imageOutputURL, setImageOutputUrl] = useState("");
//   const [text, setText] = useState("");
//   const [map, setMap] = useState({});
//   const { speak, cancel } = useSpeechSynthesis();
//
//   const speakOutput = (text) => {
//     var M = {};
//     for (var i = 0; i < text.length; i++) {
//       if (!M[text[i]]) M[text[i]] = 1;
//       else M[text[i]] = M[text[i]] + 1;
//     }
//     var xx = "";
//     for (let i = 0; i < Object.keys(M).length; i++) {
//       if (M[Object.keys(M)[i]])
//         xx = xx + M[Object.keys(M)[i]] + " " + Object.keys(M)[i] + ", ";
//     }
//
//     setMap(M);
//
//     console.log(xx);
//     speak({ text: `This Image contains: ${xx}` });
//   };
//
//   return (
//     <React.Fragment>
//       <div
//         className="row m-2 p-4"
//         style={{ background: "#f5f5f5", textAlign: "center" }}
//       >
//         <h1
//           style={{
//             fontFamily: "Georgia, Times, serif",
//             fontSize: "45px",
//             fontWeight: "bolder",
//           }}
//         >
//           ObjectDetection
//         </h1>
//       </div>
//       <FileUpload
//         setImageInputUrl={setImageInputUrl}
//         setImageOutputUrl={setImageOutputUrl}
//         setText={setText}
//         speak={speakOutput}
//         url={"http://localhost:5000//object-recognition"}
//       />
//       <div className="container border my-5">
//         <div className="row" style={{ textAlign: "center" }}>
//           {imageInputURL && (
//             <div className="col-6 p-2">
//               <h3 className="display-5">Input Image</h3>
//               <img
//                 style={{
//                   width: "100%",
//                   border: "4px solid #d2d2d2",
//                   borderRadius: "5px",
//                 }}
//                 src={imageInputURL}
//                 alt="img"
//               />
//             </div>
//           )}
//           {imageOutputURL && (
//             <div className="col-6 p-2">
//               <h3 className="display-5">Result</h3>
//               <img
//                 style={{
//                   width: "100%",
//                   border: "4px solid #d2d2d2",
//                   borderRadius: "5px",
//                 }}
//                 src={imageOutputURL}
//                 alt="img"
//               />
//             </div>
//           )}
//         </div>
//         {text && (
//           <div
//             className="row"
//             style={{ marginTop: "30px", borderTop: "2px solid gray" }}
//           >
//             <hr />
//             <h1>Image Contains:</h1>
//             <hr />
//             <div
//               className="p-5 m-5"
//               style={{ background: "rgba(235, 255, 251, 0.8)", width: "85%" }}
//             >
//               {Object.keys(map).map((key) => (
//                 <h5 key={key}>{`${key}: ${map[key]}`}</h5>
//               ))}
//             </div>
//             <button
//               className="btn btn-success m-2 p-2"
//               type="button"
//               onClick={() => speak({ text: `This Image contains: ${text}` })}
//             >
//               Speak
//             </button>
//             <button
//               className="btn btn-secondary m-2 p-2"
//               type="button"
//               onClick={cancel}
//             >
//               Stop
//             </button>
//           </div>
//         )}
//       </div>
//     </React.Fragment>
//   );
// };
//
// export default ObjectDetection;





///////////////////////////////////////////////////////////






import React, { useState } from "react";
import FileUpload from "./FileUpload";
import { useSpeechSynthesis } from "react-speech-kit";

const ObjectDetection = () => {
  const [imageInputURL, setImageInputUrl] = useState("");
  const [imageOutputURL, setImageOutputUrl] = useState("");
  const [text, setText] = useState("");
  const [map, setMap] = useState({});
  const { speak, cancel } = useSpeechSynthesis();

  const speakOutput = (text) => {
    var M = {};
    for (var i = 0; i < text.length; i++) {
      if (!M[text[i]]) M[text[i]] = 1;
      else M[text[i]] = M[text[i]] + 1;
    }
    var sortedKeys = Object.keys(M).sort();
    var speechText = sortedKeys
      .map((key) => `${M[key]} ${key}`)
      .join(", ")
      .replace(/, ([^,]*)$/, ' and $1');

    setMap(M);

    speak({ text: `This Image contains: ${speechText}` });
  };

  return (
    <React.Fragment>
      <div className="phone-container">
        <div className="phone" style={{ width: "85%", height: "95%" }}>
          <div className="phone-screen">
            <div className="assistant-container">
              <div className="assistant-content">
                <div className="assistant-title">
                  <h1 style={{ textShadow: "1px 1px 2px #000", color: "#003366" }}>Object Detection</h1>
                </div>
                <div className="assistant-body">
                  <FileUpload
                    setImageInputUrl={setImageInputUrl}
                    setImageOutputUrl={setImageOutputUrl}
                    setText={setText}
                    speak={speakOutput}
                    url={"http://localhost:5000/object-recognition"}
                  />
                  <div className="image-container">
                    {imageInputURL && (
                      <div className="input-image">
                        <h3>Input Image</h3>
                        <img src={imageInputURL} alt="Input" />
                      </div>
                    )}
                    {imageOutputURL && (
                      <div className="output-image">
                        <h3>Result</h3>
                        <img src={imageOutputURL} alt="Output" />
                      </div>
                    )}
                  </div>
                  {text && (
                    <div className="result">
                      <h3>Object Identification:</h3>
                      <div className="text-area">
                        <div className="buttons">
                          <button
                            className="speak-button"
                            onClick={() => speakOutput(text)}
                          >
                            Speak
                          </button>
                          <button className="stop-button" onClick={cancel}>
                            Stop
                          </button>
                        </div>
                        <div className="text">
                          <ul className="transcription-list">
                            {Object.keys(map)
                              .sort()
                              .map((key) => (
                                <li key={key}>{`${map[key]} ${key},`}</li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        /* Styles go here */
        .phone-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(135deg, #2d75ff, #a8bfff);
        }
        .phone {
          width: 85%;
          height: 95%;
          max-width: 750px;
          background: #333;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
        }
        .phone-screen {
          flex: 1;
          width: 100%;
          height: 100%;
          background: #fff;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow-y: auto;
        }
        .assistant-container {
          width: 100%;
          max-width: 400px;
        }
        .assistant-content {
          text-align: center;
        }
        .assistant-title {
          font-size: 28px;
          margin-bottom: 20px;
        }
        .assistant-body {
          margin-top: 20px;
        }
        .image-container {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .input-image,
        .output-image {
          flex: 1;
          text-align: center;
        }
        .input-image img,
        .output-image img {
          width: 100%;
          border: 4px solid #d2d2d2;
          border-radius: 5px;
        }
        .result {
          margin-top: 30px;
          border-top: 2px solid gray;
          padding-top: 20px;
        }
        .text-area {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .text {
          background: rgba(235, 255, 251, 0.8);
          width: 85%;
          padding: 20px;
          border-radius: 5px;
          margin-bottom: 10px;
          overflow-y: auto;
          max-height: 200px;
        }
        .transcription-list {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
        .transcription-list li {
          margin-bottom: 5px;
        }
        .buttons {
          display: flex;
          justify-content: space-between;
        }
        .speak-button,
        .copy-button,
        .stop-button {
          padding: 8px 16px;
          font-size: 14px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .speak-button:hover {
          background-color: #4caf50;
        }
        .copy-button:hover {
          background-color: #2196f3;
        }
        .stop-button {
          background-color: #f44336;
        }
      `}</style>
    </React.Fragment>
  );
};

export default ObjectDetection;

