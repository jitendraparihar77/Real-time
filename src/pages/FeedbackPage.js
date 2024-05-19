import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, onSnapshot, orderBy, query } from 'firebase/firestore';


const FeedbackPage = () => {
  const [feedback, setFeedback] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4); // Initial number of feedback items to show

  useEffect(() => {
    const feedbackQuery = query(collection(db, 'feedback'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(feedbackQuery, (snapshot) => {
      const feedbackData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFeedbacks(feedbackData);
    }, (error) => {
      console.error('Error fetching feedback:', error);
    });

    return unsubscribe;
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      try {
        await addDoc(collection(db, 'feedback'), {
          feedback,
          createdAt: new Date(),
        });
        setFeedback('');
      } catch (error) {
        console.error('Error submitting feedback:', error);
      }
    }
  };

  const showMoreFeedback = () => {
    setVisibleCount((prevCount) => prevCount + 1); // Show 4 more feedback items
  };

  return (
    <div className="container feedback-page">
      <h1>User Feedback</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback"
        />
        <button type="submit">Submit</button>
      </form>
      <div className="feedback-list">
        {feedbacks.slice(0, visibleCount).map((feedback) => (
          <div key={feedback.id} className="feedback-item">
            <p>{feedback.feedback}</p>
            <small>{new Date(feedback.createdAt.seconds * 1000).toLocaleString()}</small>
          </div>
        ))}
        {visibleCount < feedbacks.length && (
          <button className="show-more" onClick={showMoreFeedback}>Show More</button>
        )}
      </div>
    </div>
  );
};

export default FeedbackPage;
