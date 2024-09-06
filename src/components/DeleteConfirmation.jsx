import { useEffect } from "react";
import ProgressBar from "./ProgressBar.jsx";

const TIMER = 7000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {

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
          <label htmlFor="progress-bar">Auto Delete Time Left</label>
          <ProgressBar timer={TIMER}/>
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
