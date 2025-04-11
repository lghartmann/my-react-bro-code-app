import { useEffect, useRef, useState } from "react";

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const intervalIdRef = useRef<number | null>(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsed(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsed;
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setElapsed(0);
    setIsRunning(false);
  }

  function formatTime() {
    let hours = Math.floor(elapsed / (1000 * 60 * 60));
    let minutes = Math.floor((elapsed / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsed / 1000) % 60);
    let miliseconds = Math.floor((elapsed % 1000) / 10);

    return `${padStart(hours)}:${padStart(minutes)}:${padStart(
      seconds
    )}:${padStart(miliseconds)}`;
  }

  function padStart(num: number) {
    return String(num).padStart(2, "0");
  }

  return (
    <div className="stop-watch">
      <div className="display">{formatTime()}</div>
      <div className="controls">
        <button className="start-button" onClick={start}>
          Start
        </button>
        <button className="stop-button" onClick={stop}>
          Stop
        </button>
        <button className="reset-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default StopWatch;
