import { useState, useEffect } from "react";

const TIMER = 5000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Interval running...");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      console.log("Cleaned interval...");
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log("Timer Set.");
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      console.log("Cleaned timer...");
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <div id="progress-container">
          <label htmlFor="progress-bar">Self Deletion Remaining Time:</label>
          <progress id="progress-bar" value={remainingTime} max={TIMER} />
        </div>
        <div>
          <button onClick={onCancel} className="button-text">
            No
          </button>
          <button
            style={{ marginLeft: "1rem" }}
            onClick={onConfirm}
            className="button"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
