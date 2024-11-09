import { useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [interval, setIntervalTracker] = useState(-1);

  const FormatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsUpdated = seconds % 60;
    return `${minutes}:${secondsUpdated < 10 ? "0" : ""}${secondsUpdated}`;
  };

  const UpdateTime = () => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    setIntervalTracker(intervalId);
  };

  const StopTime = () => {
    clearInterval(interval);
    setIntervalTracker(-1);
  };

  const ResetTime = () => {
    clearInterval(interval);
    setIntervalTracker(-1);
    setTime(0);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {FormatTime(time)}</p>
      {interval === -1 ? (
        <button onClick={UpdateTime}>Start</button>
      ) : (
        <button onClick={StopTime}>Stop</button>
      )}

      <button onClick={ResetTime}>Reset</button>
    </div>
  );
};

export default Stopwatch;
