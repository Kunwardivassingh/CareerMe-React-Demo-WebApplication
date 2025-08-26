// import React from 'react';
// import './meetniki.css';

// const NikiInterviewer = () => {
//   return (
//     <div className="niki-page">
//       <div className="niki-header">
//         <span className="brain-icon">🧠</span>
//         <h1>Meet Niki - Your AI Interview Assistant</h1>
//         <p className="subtext">Interactive video conversation with AI-powered interview experience</p>
//       </div>
//       <div className="niki-card">
//         <div className="avatar">
//           <span className="brain-icon">🧠</span>
//           <span className="mic-icon">🎙️</span>
//         </div>
//         <h2>Hi! I'm Niki</h2>
//         <p>Your friendly AI interviewer for the Software Developer position</p>
//         <ul className="features-list">
//           <li><span className="check-icon">📝</span> Natural conversation with contextual questions</li>
//           <li><span className="check-icon">🔊</span> Voice-enabled responses using browser TTS</li>
//           <li><span className="check-icon">🤖</span> AI analysis of communication skills</li>
//           <li><span className="check-icon">⏰</span> 10-15 minute structured interview</li>
//         </ul>
//         <div className="video-setup">
//           <span className="camera-icon">📷</span>
//           <p>Setting up camera and microphone...</p>
//           <button className="allow-camera-btn">Allow Camera Access</button>
//           <button type="button" className="back-link">← Back to Setup</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NikiInterviewer;





import React from 'react';
import './meetniki.css';

const MikiInterviewer = () => {
  return (
    <div className="niki-page">
      <div className="niki-header">
        <span className="brain-icon">🧠</span>
        <h1>Meet CareerMe - Your AI Interview Assistant</h1>
        <span className="mic-icon">🎙️</span>
        <br></br>
        <h4 className="subtext">Interactive video conversation with AI-powered interview experience</h4>
      </div>
      <div className="CareerMe-content">
        <div className="avatar">
          <span className="brain-icon">🧠</span>
          <span className="mic-icon">🎙️</span>
          <h2>Hi! I'm Miki</h2>
        </div>
        
        <p>Your friendly AI interviewer for the Software Developer position</p>
        <ul className="features-list">
          <li><span className="check-icon">📝</span> Natural conversation with contextual questions</li>
          <li><span className="check-icon">🔊</span> Voice-enabled responses using browser TTS</li>
          <li><span className="check-icon">🤖</span> AI analysis of communication skills</li>
          <li><span className="check-icon">⏰</span> 10-15 minute structured interview</li>
        </ul>
      </div>
      <div className="video-setup">
        <h3>Video Setup</h3>
        <span className="camera-icon">📷</span>
        <p>Setting up camera and microphone...</p>
        <button className="allow-camera-btn">
          <span className="camera-icon">📷</span> Allow Camera Access
        </button>
        <button type="button" className="back-link">← Back to Setup</button>
      </div>
    </div>
  );
};

export default MikiInterviewer;