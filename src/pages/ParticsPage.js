import React, { useState, useRef, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './ParticsPage.css';

// Mock translation function (you'll need to replace this with a real translation API)
const translateText = async (text) => {
  // Placeholder for actual translation logic
  return `Hindi Translation of: ${text}`;
};

function ParticsPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [stream, setStream] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef(null);
  const videoRef = useRef(null);
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [recordingData, setRecordingData] = useState({
    text: '',
    mistakes: [], // Removed suggestions as typo-js is not used
  });
  const [finalText, setFinalText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  useEffect(() => {
    if (transcript) {
      const { text, mistakes } = processTranscript(transcript);
      setRecordingData({ text, mistakes });
      translateText(text).then(setTranslatedText);
    }
  }, [transcript]);

  useEffect(() => {
    let timer;
    if (isRecording) {
      timer = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRecording && elapsedTime !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRecording, elapsedTime]);

  const handleStartRecording = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setStream(mediaStream);
      setIsRecording(true);
      setElapsedTime(0);
      SpeechRecognition.startListening();
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const handleEndRecording = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    setIsRecording(false);
    SpeechRecognition.stopListening();
    const { text, mistakes } = processTranscript(transcript);
    setRecordingData({ text, mistakes });
    setFinalText(text);
    resetTranscript();
  };

  const processTranscript = (transcript) => {
    const words = transcript.split(' ');
    const mistakes = [];

    // Logic to identify mistakes can be implemented here (without typo-js)
    // You can explore using regular expressions, spell checkers, or other techniques

    words.forEach((word) => {
      // Add logic to check for mistakes and populate the mistakes array
    });

    return { text: transcript, mistakes };
  };

  return (
    <div className="container">
      <h1>Welcome to the Real-Time English Communication Platform!</h1>
      <p>
        This platform helps you improve your English communication skills. Practice speaking, get real-time feedback, and enhance your proficiency.
      </p>
      <div className="interaction-box">
        {isRecording ? (
          <button className="end-talk-button" onClick={handleEndRecording}>End Talk</button>
        ) : (
          <button className="start-talk-button" onClick={handleStartRecording}>Talk with Me <i className="fas fa-volume-up"></i></button>
        )}
      </div>
      <div className="interaction-box">
        <div className="video-container">
          <video className="video-element" ref={videoRef} autoPlay playsInline muted></video>
        </div>
        <div className="transcript-box">
          <div className="header">
            <p>Words: {recordingData.text.split(' ').length}</p>
            <p>Time: {Math.floor(elapsedTime / 60)}:{elapsedTime % 60 < 10 ? '0' : ''}{elapsedTime % 60}</p>
          </div>
          {finalText && (
            <>
              <p>English: {finalText}</p>
              <p>Hindi: {translatedText}</p>
            </>
          )}
          {recordingData.mistakes.length > 0 && (
            <div>
              <p>Underlined mistakes:</p>
              <p className="mistakes">{recordingData.mistakes.join(', ')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ParticsPage;
