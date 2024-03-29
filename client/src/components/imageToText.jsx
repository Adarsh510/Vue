// import React, { useState } from "react";
// import FileUpload from "./FileUpload";
// import { useSpeechSynthesis } from "react-speech-kit";
//
// const ImageToText = () => {
//   const [imageInputURL, setImageInputUrl] = useState("");
//   const [imageOutputURL, setImageOutputUrl] = useState("");
//   const [text, setText] = useState("");
//   const { speak, cancel, speaking } = useSpeechSynthesis();
//
//   const speakOutput = (text) => {
//     speak({ text: `This Image contains: ${text}` });
//   };
//
//   // speak({ text: "hi" });
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
//           Image To Text
//         </h1>
//       </div>
//       <FileUpload
//         setImageInputUrl={setImageInputUrl}
//         setImageOutputUrl={setImageOutputUrl}
//         setText={setText}
//         speak={speakOutput}
//         url={"http://localhost:5000/image-to-text"}
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
//             <h1>
//               Image Contains:
//               {speaking ? (
//                 <button
//                   className="btn btn-secondary m-2 p-2"
//                   type="button"
//                   onClick={cancel}
//                 >
//                   Stop
//                 </button>
//               ) : (
//                 <button
//                   className="btn btn-success m-2 p-2"
//                   type="button"
//                   onClick={() => speak({ text })}
//                 >
//                   Speak
//                 </button>
//               )}
//             </h1>
//             <hr />
//             <div
//               className="p-5 m-5"
//               style={{ background: "rgba(235, 255, 251, 0.8)", width: "85%" }}
//             >
//               <h5>{text}</h5>
//             </div>
//           </div>
//         )}
//       </div>
//     </React.Fragment>
//   );
// };
// export default ImageToText;









////////////////////////////////////////////////////





// import React, { useState } from "react";
// import FileUpload from "./FileUpload";
// import { useSpeechSynthesis } from "react-speech-kit";
//
// const ImageToText = () => {
//   const [imageInputURL, setImageInputUrl] = useState("");
//   const [imageOutputURL, setImageOutputUrl] = useState("");
//   const [text, setText] = useState("");
//   const { speak, cancel, speaking } = useSpeechSynthesis();
//
//   const speakOutput = (text) => {
//     speak({ text: `This Image contains: ${text}` });
//   };
//
//   return (
//     <div className="phone-container">
//       <div className="phone" style={{ width: "85%" }}> {/* Increase width by 25% */}
//         <div className="phone-screen">
//           <div className="assistant-container">
//             <div className="assistant-content">
//               <div className="assistant-title">
//                 <h1>Image To Text</h1>
//               </div>
//               <div className="assistant-body">
//                 <FileUpload
//                   setImageInputUrl={setImageInputUrl}
//                   setImageOutputUrl={setImageOutputUrl}
//                   setText={setText}
//                   speak={speakOutput}
//                   url={"http://localhost:5000/image-to-text"}
//                 />
//                 {imageInputURL && (
//                   <div className="input-image">
//                     <h3>Input Image</h3>
//                     <img src={imageInputURL} alt="Input" />
//                   </div>
//                 )}
//                 {imageOutputURL && (
//                   <div className="output-image">
//                     <h3>Result</h3>
//                     <img src={imageOutputURL} alt="Output" />
//                   </div>
//                 )}
//                 {text && (
//                   <div className="result">
//                     <h3>Image Contains:</h3>
//                     <div className="text-area">
//                       <div className="text">{text}</div>
//                       {speaking ? (
//                         <button className="stop-button" onClick={cancel}>
//                           Stop
//                         </button>
//                       ) : (
//                         <button className="speak-button" onClick={() => speak({ text })}>
//                           Speak
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <style jsx>{`
//         .phone-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100vh;
//           background: linear-gradient(135deg, #2d75ff, #a8bfff);
//         }
//         .phone {
//           width: 85%; /* Increase width by 25% */
//           height: 90%; /* Adjust as needed */
//           max-width: 750px; /* Set maximum width */
//           max-height: 800px; /* Set maximum height */
//           background: #333;
//           border-radius: 20px;
//           overflow: hidden;
//           box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
//         }
//         .phone-screen {
//           width: 100%;
//           height: 100%;
//           background: #fff;
//           padding: 20px;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }
//         .assistant-container {
//           width: 100%;
//           max-width: 400px;
//         }
//         .assistant-content {
//           text-align: center;
//         }
//         .assistant-title {
//           font-size: 28px;
//           margin-bottom: 20px;
//         }
//         .assistant-body {
//           margin-top: 20px;
//         }
//         .input-image,
//         .output-image {
//           margin-top: 20px;
//           text-align: center;
//         }
//         .input-image img,
//         .output-image img {
//           width: 100%;
//           border: 4px solid #d2d2d2;
//           border-radius: 5px;
//         }
//         .result {
//           margin-top: 30px;
//           border-top: 2px solid gray;
//           padding-top: 20px;
//         }
//         .text-area {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           margin-top: 20px;
//         }
//         .text {
//           background: rgba(235, 255, 251, 0.8);
//           width: 85%;
//           padding: 20px;
//           border-radius: 5px;
//         }
//         .speak-button,
//         .stop-button {
//           padding: 10px 20px;
//           font-size: 16px;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//           transition: background-color 0.3s ease;
//         }
//         .speak-button:hover {
//           background-color: #4caf50;
//         }
//         .stop-button {
//           background-color: #f44336;
//         }
//       `}</style>
//     </div>
//   );
// };
//
// export default ImageToText;





//////////////////////////////////////////////////////





import React, { useState } from "react";
import FileUpload from "./FileUpload";
import { useSpeechSynthesis } from "react-speech-kit";

const ImageToText = () => {
  const [imageInputURL, setImageInputUrl] = useState("");
  const [imageOutputURL, setImageOutputUrl] = useState("");
  const [text, setText] = useState("");
  const { speak, cancel, speaking } = useSpeechSynthesis();

  const speakOutput = (text) => {
    speak({ text: `This Image contains: ${text}` });
  };

  const handleCopyText = () => {
    // Copy text to clipboard
    navigator.clipboard.writeText(text);
    // Optionally provide user feedback
    alert("Transcript copied to clipboard!");
  };

  return (
    <div className="phone-container">
      <div className="phone" style={{ width: "85%", height: "95%" }}>
        <div className="phone-screen">
          <div className="assistant-container">
            <div className="assistant-content">
              <div className="assistant-title">
                <h1 style={{ color: "#004438", textShadow: "1px 1px 2px #000000" }}>Image To Text</h1>
              </div>
              <div className="assistant-body">
                <FileUpload
                  setImageInputUrl={setImageInputUrl}
                  setImageOutputUrl={setImageOutputUrl}
                  setText={setText}
                  speak={speakOutput}
                  url={"http://localhost:5000/image-to-text"}
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
                    <h3>Transcription:</h3>
                    <div className="text-area">
                      <div className="buttons">
                        {speaking ? (
                          <button className="stop-button" onClick={cancel}>
                            Stop Speaking
                          </button>
                        ) : (
                          <button className="speak-button" onClick={() => speak({ text })}>
                            Speak Transcript
                          </button>
                        )}
                        <button className="copy-button" onClick={handleCopyText}>
                          Copy Transcript
                        </button>
                      </div>
                      <div className="text">{text}</div>
                    </div>
                  </div>
                )}
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
        }
        .phone-screen {
          width: 100%;
          height: 100%;
          background: #fff;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
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
    </div>
  );
};

export default ImageToText;
