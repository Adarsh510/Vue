// import React from "react";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
// import { useHistory } from "react-router-dom";
//
// import { useSpeechSynthesis } from "react-speech-kit";
//
// const Assistant = () => {
//   const history = useHistory();
//   //   SpeechRecognition.startListening({ continuous: true });
//   const { speak } = useSpeechSynthesis();
//   const commands = [
//     {
//       command: "Go to *",
//       callback: (link) => {
//         const x = `Redirect to: ${link}`;
//         console.log(x);
//         if (link === "object detection") {
//           speak({ text: x });
//           history.push(`/object-detection`);
//         }else if (link === "face recognition") {
//           speak({ text: x });
//           history.push(`/face-recognition`);
//         }else if (link === "image to text") {
//           speak({ text: x });
//           history.push(`/image-to-text`);
//         } else if (link === "text to speech") {
//           speak({ text: x });
//           history.push(`/text-to-speech`);
//         } else if (link === "speech to text") {
//           speak({ text: x });
//           history.push(`/speech-to-text`);
//         } else if (link === "home") {
//           speak({ text: x });
//           history.push(`/`);
//         } else {
//           speak({ text: "I don't get it, Please try again!" });
//         }
//       },
//     },
//     {
//       command: "Hey Jarvis",
//       callback: () => {
//         speak({ text: "Hi Sir" });
//
//         console.log("hii");
//       },
//       //   matchInterim: true,
//     },
//     // {
//     //   command: "*",
//     //   callback: () => {
//     //     speak({ text: "Please repeat" });
//
//     //     console.log("repeat");
//     //   },
//     // },
//   ];
//   const { transcript: t1 } = useSpeechRecognition({ commands });
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
//           Assistant
//         </h1>
//       </div>
//       <div style={{ border: "10px solid gray", padding: "10px" }}>
// {/*         <div>Say "Hey Jarvis"</div> */}
//         <h3>Say "Hey Jarvis"</h3>
//         <p>{t1 ? t1 : "Start listening for transcript"}</p>
//         <button onClick={SpeechRecognition.startListening}>
//           Start listening
//         </button>
//         &nbsp;
//         <button onClick={SpeechRecognition.stopListening}>
//           Stop listening
//         </button>
//       </div>
//     </React.Fragment>
//   );
// };
//
// export default Assistant;






////////////////////////////////////// final working code




// import React, { useState } from "react";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
// import { useHistory } from "react-router-dom";
// import { useSpeechSynthesis } from "react-speech-kit";
//
// const Assistant = () => {
//   const history = useHistory();
//   const { speak } = useSpeechSynthesis();
//   const [isListening, setIsListening] = useState(false);
//
//   const startListening = () => {
//     setIsListening(true);
//     SpeechRecognition.startListening({ continuous: true });
//   };
//
//   const stopListening = () => {
//     setIsListening(false);
//     SpeechRecognition.stopListening();
//   };
//
//   const commands = [
//     {
//       command: "Go to *",
//       callback: (link) => {
//         const x = `Redirect to: ${link}`;
//         console.log(x);
//         if (link === "object detection") {
//           speak({ text: x });
//           history.push(`/object-detection`);
//         } else if (link === "face recognition") {
//           speak({ text: x });
//           history.push(`/face-recognition`);
//         } else if (link === "image to text") {
//           speak({ text: x });
//           history.push(`/image-to-text`);
//         } else if (link === "text to speech") {
//           speak({ text: x });
//           history.push(`/text-to-speech`);
//         } else if (link === "speech to text") {
//           speak({ text: x });
//           history.push(`/speech-to-text`);
//         } else if (link === "home") {
//           speak({ text: x });
//           history.push(`/`);
//         } else {
//           speak({ text: "I don't get it, Please try again!" });
//         }
//       },
//     },
//     {
//       command: "Jarvis",
//       callback: () => {
//         speak({ text: "Hi Sir" });
//         console.log("hii");
//       },
//     },
//   ];
//   const { transcript: t1 } = useSpeechRecognition({ commands });
//
//   return (
//     <div className="phone-container">
//       <div className="phone">
//         <div className="phone-screen">
//           <div className="assistant-container">
//             <div className="assistant-content">
//               <div className="assistant-title">
//                 <h1>Assistant</h1>
//               </div>
//               <div className="assistant-body">
//                 <h3>Say "Jarvis"</h3>
//                 <p>{t1 ? t1 : "Start listening for transcript"}</p>
//                 <button
//                   onClick={isListening ? stopListening : startListening}
//                   className={`listening-btn ${isListening ? "listening" : ""}`}
//                 >
//                   {isListening ? "Listening" : "Start Listening"}
//                 </button>
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
//           height: 100vh; /* Adjust the height to match FaceRecognition */
//           background: linear-gradient(135deg, #2d75ff, #a8bfff);
//           overflow: hidden;
//         }
//         .phone {
//           width: 85%; /* Adjust the width to match FaceRecognition */
//           height: 95%; /* Adjust the height to match FaceRecognition */
//           max-width: 750px;
//           max-height: 800px;
//           background: #333;
//           border-radius: 20px;
//           overflow: hidden;
//           box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
//         }
//         .phone-screen {
//           height: 100%;
//           overflow-y: auto;
//           padding: 20px;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           background: #fff;
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
//           text-shadow: 1px 1px 2px #000;
//         }
//         .assistant-body {
//           margin-top: 20px;
//         }
//         .listening-btn {
//           background-color: #f00;
//           color: #fff;
//           border: none;
//           border-radius: 5px;
//           padding: 10px;
//           cursor: pointer;
//           transition: background-color 0.3s ease;
//         }
//         .listening-btn.listening {
//           background-color: #00f;
//         }
//       `}</style>
//     </div>
//   );
// };
//
// export default Assistant;


/////////////////////////////////////////////////// Mike off





import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useHistory } from "react-router-dom";
import { useSpeechSynthesis } from "react-speech-kit";

const Assistant = () => {
  const history = useHistory();
  const { speak } = useSpeechSynthesis();
  const [isListening, setIsListening] = useState(false);
  const { transcript: t1 } = useSpeechRecognition();

  useEffect(() => {
    if (!isListening) {
      SpeechRecognition.abortListening();
    }
  }, [isListening]);

  const startListening = () => {
    setIsListening(true);
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
  };

  const commands = [
    {
      command: "Go to *",
      callback: (link) => {
        const x = `Redirect to: ${link}`;
        console.log(x);
        if (link === "object detection") {
          speak({ text: x });
          history.push(`/object-detection`);
        } else if (link === "face recognition") {
          speak({ text: x });
          history.push(`/face-recognition`);
        } else if (link === "image to text") {
          speak({ text: x });
          history.push(`/image-to-text`);
        } else if (link === "text to speech") {
          speak({ text: x });
          history.push(`/text-to-speech`);
        } else if (link === "speech to text") {
          speak({ text: x });
          history.push(`/speech-to-text`);
        } else if (link === "home") {
          speak({ text: x });
          history.push(`/`);
        } else {
          speak({ text: "I don't get it, Please try again!" });
        }
      },
    },
    {
      command: "Zen",
      callback: () => {
        speak({ text: "Hi Sir" });
        console.log("hii");
      },
    },
  ];

  useSpeechRecognition({ commands });

  return (
    <div className="phone-container">
      <div className="phone">
        <div className="phone-screen">
          <div className="assistant-container">
            <div className="assistant-content">
              <div className="assistant-title">
                <h1>Assistant</h1>
              </div>
              <div className="assistant-body">
                <h3>Say "Zen"</h3>
                <p>{t1 ? t1 : "Start listening for transcript"}</p>
                <button
                  onClick={isListening ? stopListening : startListening}
                  className={`listening-btn ${isListening ? "listening" : ""}`}
                >
                  {isListening ? "Listening" : "Start Listening"}
                </button>
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
          height: 100vh;
          background: linear-gradient(135deg, #2d75ff, #a8bfff);
          overflow: hidden;
        }
        .phone {
          width: 85%;
          height: 95%;
          max-width: 750px;
          max-height: 800px;
          background: #333;
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
          background: #fff;
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
          text-shadow: 1px 1px 2px #000;
        }
        .assistant-body {
          margin-top: 20px;
        }
        .listening-btn {
          background-color: #f00;
          color: #fff;
          border: none;
          border-radius: 5px;
          padding: 10px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .listening-btn.listening {
          background-color: #00f;
        }
      `}</style>
    </div>
  );
};

export default Assistant;



