// //
// // import React, { useState } from "react";
// // import Notes from "./notes";
// //
// // import SpeechRecognition, {
// //   useSpeechRecognition,
// // } from "react-speech-recognition";
// //
// // const SpeechToText = () => {
// //   const [notes, setnotes] = useState([
// //     { time: "1", val: "Hello Everyone" },
// //     { time: "2", val: "Welcome to Scanvue" },
// //   ]);
// //   const {
// //     transcript,
// //     listening,
// //     resetTranscript,
// //     browserSupportsSpeechRecognition,
// //   } = useSpeechRecognition();
// //   // SpeechRecognition.startListening({ continuous: false });
// //
// //   if (!browserSupportsSpeechRecognition) {
// //     return <span>Browser doesn't support speech recognition.</span>;
// //   }
// //
// //   return (
// //     <React.Fragment>
// //       <div
// //         className="row m-2 p-4"
// //         style={{ background: "#f5f5f5", textAlign: "center" }}
// //       >
// //         <h1
// //           style={{
// //             fontFamily: "Georgia, Times, serif",
// //             fontSize: "45px",
// //             fontWeight: "bolder",
// //           }}
// //         >
// //           Speech To Text
// //         </h1>
// //       </div>
// //       <div className="column">
// //         <div className="row mx-2">
// //           <div className="col-5 p-5" style={{ border: "4px solid #f8f9fa" }}>
// //             {!listening && (
// //               <div className="p-3 mb-2 bg-light text-dark">
// //                 Please click "Start" and start speaking.
// //               </div>
// //             )}
// //             {listening && (
// //               <div className="p-3 mb-2 bg-light text-dark">
// //                 Please click "Stop" and stop speaking.
// //               </div>
// //             )}
// //             <p>Microphone: {listening ? "on" : "off"}</p>
// //             {!listening && (
// //               <button
// //                 className="btn btn-success "
// //                 onClick={() =>
// //                   SpeechRecognition.startListening({ continuous: true })
// //                 }
// //               >
// //                 Start
// //               </button>
// //             )}
// //             {listening && (
// //               <button
// //                 className="btn btn-secondary "
// //                 onClick={SpeechRecognition.abortListening}
// //               >
// //                 Stop
// //               </button>
// //             )}
// //             <button className="btn btn-warning mx-2" onClick={resetTranscript}>
// //               Reset
// //             </button>
// //             <hr />
// //             {transcript && (
// //               <React.Fragment>
// //                 <h5 className="mx-3">You speak:</h5>
// //                 <div
// //                   style={{
// //                     margin: "4px",
// //                     padding: "10px",
// //                     border: "2px solid #f8f9fa",
// //                     borderRadius: "10px",
// //                     background: "rgba(191, 191, 191, 0.7)",
// //                     minHeight: "90px",
// //                   }}
// //                 >
// //                   {transcript}
// //                 </div>
// //                 <button
// //                   className="btn btn-info mx-2"
// //                   onClick={() => {
// //                     const x = notes;
// //                     SpeechRecognition.abortListening();
// //                     x.unshift({ time: Date.now(), val: transcript });
// //                     setnotes(x);
// //                     resetTranscript();
// //                   }}
// //                 >
// //                   Save
// //                 </button>
// //                 <button
// //                   className="btn btn-info"
// //                   onClick={() => {
// //                     SpeechRecognition.abortListening();
// //                     navigator.clipboard.writeText(transcript);
// //                   }}
// //                 >
// //                   copy
// //                 </button>
// //               </React.Fragment>
// //             )}
// //           </div>
// //           <div
// //             className="col-7 px-5 py-2"
// //             style={{
// //               border: "4px solid #f8f9fa",
// //               height: "500px",
// //             }}
// //           >
// //             <Notes notes={notes} setnotes={setnotes} />
// //           </div>
// //         </div>
// //       </div>
// //     </React.Fragment>
// //   );
// // };
// // export default SpeechToText;
// //
//
//
//
//
//
//
//
//
// import React, { useState } from "react";
// import Notes from "./notes";
//
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
//
// const SpeechToText = () => {
//   const [notes, setNotes] = useState([
//     { time: "1", val: "Hello Everyone" },
//     { time: "2", val: "Welcome to Scanvue" },
//   ]);
//
//   const {
//     transcript,
//     listening,
//     resetTranscript,
//     browserSupportsSpeechRecognition,
//   } = useSpeechRecognition();
//
//   const handleStartListening = () => {
//     SpeechRecognition.startListening({ continuous: true });
//   };
//
//   const handleStopListening = () => {
//     SpeechRecognition.abortListening();
//   };
//
//   if (!browserSupportsSpeechRecognition) {
//     return <span>Browser doesn't support speech recognition.</span>;
//   }
//
//   return (
//     <div className="phone-container" style={{ overflowX: "hidden" }}>
//       <div className="phone">
//         <div className="phone-screen">
//           <div className="phone-title">Speech To Text</div>
//           <div className="phone-content">
//             {!listening && (
//               <div className="message">
//                 Please click "Start" and start speaking.
//               </div>
//             )}
//             {listening && (
//               <div className="message">Please click "Stop" to stop speaking.</div>
//             )}
//             <p>Microphone: {listening ? "on" : "off"}</p>
//             {!listening && (
//               <button className="btn btn-success" onClick={handleStartListening}>
//                 Start
//               </button>
//             )}
//             {listening && (
//               <button className="btn btn-secondary" onClick={handleStopListening}>
//                 Stop
//               </button>
//             )}
//             <button className="btn btn-warning" onClick={resetTranscript}>
//               Reset
//             </button>
//             <hr />
//             {transcript && (
//               <div>
//                 <h5 className="mx-3">You speak:</h5>
//                 <div className="transcript">{transcript}</div>
//                 <button
//                   className="btn btn-info mx-2"
//                   onClick={() => {
//                     const updatedNotes = [...notes];
//                     updatedNotes.unshift({ time: Date.now(), val: transcript });
//                     setNotes(updatedNotes);
//                     resetTranscript();
//                   }}
//                 >
//                   Save
//                 </button>
//                 <button
//                   className="btn btn-info"
//                   onClick={() => {
//                     navigator.clipboard.writeText(transcript);
//                     resetTranscript();
//                   }}
//                 >
//                   Copy
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//
//       <style jsx>{`
//         .phone-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100vh;
//           background: linear-gradient(135deg, #2d75ff, #a8bfff);
//           overflow-x: hidden;
//         }
//
//         .phone {
//           background-color: #000;
//           border-radius: 40px;
//           overflow: hidden;
//           max-width: 100%;
//         }
//
//         .phone-screen {
//           border-radius: 30px;
//           height: 500px;
//           overflow-y: auto;
//           padding: 20px;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           color: #fff;
//         }
//
//         .phone-title {
//           font-family: Arial, sans-serif;
//           font-size: 24px;
//           font-weight: bold;
//           margin-bottom: 20px;
//         }
//
//         .phone-content {
//           text-align: center;
//         }
//
//         .message {
//           margin: 10px 0;
//         }
//
//         .transcript {
//           margin: 4px;
//           padding: 10px;
//           border: 2px solid #f8f9fa;
//           border-radius: 10px;
//           background: rgba(191, 191, 191, 0.7);
//           min-height: 90px;
//         }
//
//         .btn {
//           margin: 10px;
//         }
//       `}</style>
//     </div>
//   );
// };
//
// export default SpeechToText;



////////////////////////////////////////////////////




// import React, { useState } from "react";
// import Notes from "./notes";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
// import { useSpeechSynthesis } from "react-speech-kit";
//
// const SpeechToText = () => {
//   const [notes, setNotes] = useState([
//     { time: "1", val: "Hello Everyone" },
//     { time: "2", val: "Welcome to Scanvue" },
//   ]);
//
//   const {
//     transcript,
//     listening,
//     resetTranscript,
//     browserSupportsSpeechRecognition,
//   } = useSpeechRecognition();
//
//   const { speak } = useSpeechSynthesis();
//
//   const handleStartListening = () => {
//     SpeechRecognition.startListening({ continuous: true });
//   };
//
//   const handleStopListening = () => {
//     SpeechRecognition.abortListening();
//   };
//
//   if (!browserSupportsSpeechRecognition) {
//     return <span>Browser doesn't support speech recognition.</span>;
//   }
//
//   return (
//     <div className="phone-container">
//       <div className="phone">
//         <div className="phone-screen">
//           <div className="phone-title">Speech To Text</div>
//           <div className="phone-content">
//             {!listening && (
//               <div className="message">
//                 Please click "Start" and start speaking.
//               </div>
//             )}
//             {listening && (
//               <div className="message">Please click "Stop" to stop speaking.</div>
//             )}
//             <p>Microphone: {listening ? "on" : "off"}</p>
//             {!listening && (
//               <button className="btn btn-success" onClick={handleStartListening}>
//                 Start
//               </button>
//             )}
//             {listening && (
//               <button className="btn btn-secondary" onClick={handleStopListening}>
//                 Stop
//               </button>
//             )}
//             <button className="btn btn-warning" onClick={resetTranscript}>
//               Reset
//             </button>
//             <button
//               className="btn btn-primary"
//               disabled={!transcript}
//               onClick={() => speak({ text: transcript })}
//             >
//               Speak Transcription
//             </button>
//             <hr />
//             {transcript && (
//               <div>
//                 <h5 className="mx-3">You spoke:</h5>
//                 <div className="transcript">{transcript}</div>
//                 <button
//                   className="btn btn-info mx-2"
//                   onClick={() => {
//                     const updatedNotes = [...notes];
//                     updatedNotes.unshift({ time: Date.now(), val: transcript });
//                     setNotes(updatedNotes);
//                     resetTranscript();
//                   }}
//                 >
//                   Save
//                 </button>
//                 <button
//                   className="btn btn-info"
//                   onClick={() => {
//                     navigator.clipboard.writeText(transcript);
//                     resetTranscript();
//                   }}
//                 >
//                   Copy
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//
//       <style jsx>{`
//         .phone-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100vh;
//           background: linear-gradient(135deg, #2d75ff, #a8bfff);
//         }
//
//         .phone {
//           background-color: #fff;
//           border-radius: 40px;
//           overflow: hidden;
//           max-width: 100%;
//         }
//
//         .phone-screen {
//           border-radius: 30px;
//           height: 500px;
//           overflow-y: auto;
//           padding: 20px;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           color: #000;
//         }
//
//         .phone-title {
//           font-family: Arial, sans-serif;
//           font-size: 24px;
//           font-weight: bold;
//           margin-bottom: 20px;
//         }
//
//         .phone-content {
//           text-align: center;
//         }
//
//         .message {
//           margin: 10px 0;
//         }
//
//         .transcript {
//           margin: 4px;
//           padding: 10px;
//           border: 2px solid #f8f9fa;
//           border-radius: 10px;
//           background: rgba(191, 191, 191, 0.7);
//           min-height: 90px;
//         }
//
//         .btn {
//           margin: 10px;
//         }
//       `}</style>
//     </div>
//   );
// };
//
// export default SpeechToText;




/////////////////////////////////


import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeechToText = () => {
  const [notes, setNotes] = useState([
    { time: "1", val: "Hello Everyone" },
    { time: "2", val: "Welcome to Scanvue" },
  ]);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const { speak } = useSpeechSynthesis();

  const handleStartListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const handleStopListening = () => {
    SpeechRecognition.abortListening();
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="phone-container">
      <div className="phone">
        <div className="phone-screen">
          <div className="assistant-container">
            <div className="assistant-content">
              <div className="assistant-title">
                <h1>Speech To Text</h1>
              </div>
              <div className="assistant-body">
                {!listening && (
                  <div className="message">
                    Please click "Start" and start speaking.
                  </div>
                )}
                {listening && (
                  <div className="message">Please click "Stop" to stop speaking.</div>
                )}
                <p>Microphone: {listening ? "on" : "off"}</p>
                {!listening && (
                  <button className="btn btn-success" onClick={handleStartListening}>
                    Start
                  </button>
                )}
                {listening && (
                  <button className="btn btn-secondary" onClick={handleStopListening}>
                    Stop
                  </button>
                )}
                <button className="btn btn-warning" onClick={resetTranscript}>
                  Reset
                </button>
                <button
                  className="btn btn-primary"
                  disabled={!transcript}
                  onClick={() => speak({ text: transcript })}
                >
                  Speak Transcription
                </button>
                <hr />
                {transcript && (
                  <div>
                    <h5 className="mx-3">You spoke:</h5>
                    <div className="transcript">{transcript}</div>
                    <button
                      className="btn btn-info mx-2"
                      onClick={() => {
                        const updatedNotes = [...notes];
                        updatedNotes.unshift({ time: Date.now(), val: transcript });
                        setNotes(updatedNotes);
                        resetTranscript();
                      }}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-info"
                      onClick={() => {
                        navigator.clipboard.writeText(transcript);
                        resetTranscript();
                      }}
                    >
                      Copy
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .phone-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh; /* Adjust the height to match FaceRecognition */
          background: linear-gradient(135deg, #2d75ff, #a8bfff);
          overflow: hidden;
        }

        .phone {
          width: 85%; /* Adjust the width to match FaceRecognition */
          height: 95%; /* Adjust the height to match FaceRecognition */
          max-width: 750px; /* Set maximum width */
          max-height: 800px; /* Set maximum height */
          background-color: #fff; /* Change background color to white */
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        }

        .phone-screen {
          height: 100%;
          overflow-y: auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #000; /* Change text color to black */
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
          text-shadow: 1px 1px 2px #000; /* Add shadow effect */
        }

        .assistant-body {
          text-align: center;
          margin-top: 20px;
        }

        .message {
          margin: 10px 0;
        }

        .transcript {
          margin: 4px;
          padding: 10px;
          border: 2px solid #f8f9fa;
          border-radius: 10px;
          background: rgba(191, 191, 191, 0.7);
          min-height: 90px;
        }

        .btn {
          margin: 10px;
        }
      `}</style>
    </div>
  );
};

export default SpeechToText;
