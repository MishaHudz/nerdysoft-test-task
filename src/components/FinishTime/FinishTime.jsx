import { useSelector } from "react-redux";
import { TimeContainer } from "./FinishTime.styled";

function FinishTime() {
  const startTime = useSelector((store) => store.question.startTime);

  const secondsTransform = (start) => {
    const currentTime = Date.now();
    const testSeconds =
      Math.round(currentTime / 1000) - Math.round(start / 1000);

    const hours = Math.floor(testSeconds / 3600);
    const minutes = Math.floor((testSeconds % 3600) / 60);
    const seconds = testSeconds % 60;

    return `${hours ? String(hours).padStart(2, "0") + ": " : ""}
     ${String(minutes).padStart(2, "0") + " : "} 
     ${String(seconds).padStart(2, "0")}`;
  };

  return (
    <TimeContainer>
      <p>Your time is:</p>
      <p>{secondsTransform(startTime)}</p>
    </TimeContainer>
  );
}

export default FinishTime;
