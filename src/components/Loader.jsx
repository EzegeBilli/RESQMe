
import "./Loader.css";

import truckStage1 from "../assets/truck-1.png";
import truckStage2 from "../assets/truck-2.png";
import truckStage3 from "../assets/truck-3.png";
import truckStage4 from "../assets/truck-4.png";

const truckImages = {
  1: truckStage1,
  2: truckStage2,
  3: truckStage3,
  4: truckStage4,
};

const milestoneClasses = {
  1: "milestone-1",
  2: "milestone-2",
  3: "milestone-3",
  4: "milestone-4",
};

const stageMessages = {
  1: "Initializing emergency map...",
  2: "Connecting to dispatch units...",
  3: "Locating nearest responders...",
  4: "Ready!",
};

export default function Loader({
  isLoading = false,
  progressStage = 1,
  message,
}) {
  if (!isLoading) return null;

  // Keep the stage within the supported range of 1–4.
  const stage = Math.min(4, Math.max(1, progressStage));
  const milestoneClass = milestoneClasses[stage];

  return (
    <div className="resq-loader-overlay" role="status" aria-live="polite">
      <div className="loader-content">
        <div className="loader-logo">
          RESQ<span className="logo-accent">X</span>
        </div>

        <div className="loader-track-wrapper">
          <div className="loader-track">
            <div className={`loader-progress-bar ${milestoneClass}`} />

            <div className={`loader-vehicle ${milestoneClass}`}>
              <img
                src={truckImages[stage]}
                alt=""
                aria-hidden="true"
                className="truck-img"
              />
            </div>
          </div>
        </div>

        <p className="loader-text">
          {message || stageMessages[stage]}
        </p>
      </div>
    </div>
  );
}
