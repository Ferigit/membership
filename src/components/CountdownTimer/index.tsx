import { useState, useEffect } from "react";
import { AccessAlarm } from "@mui/icons-material";

const CountdownTimer = ({ expiresIn = 120 }: any) => {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [timeLeft, setTimeLeft] = useState(expiresIn);

  const formatTime = (t: any) => (t < 10 ? "0" + t : t);

  useEffect(() => {
    const interval = setInterval(() => {
      const m = Math.floor(timeLeft / 60);
      const s = timeLeft - m * 60;

      setMin(m);
      setSec(s);
      if (m <= 0 && s <= 0) return () => clearInterval(interval);

      setTimeLeft((t: any) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);
  console.log("min sec: ", min, sec);
  return (
    <div className="timer">
      {min == 0 && sec === 0 ? (
        <a
          className="resed"
          onClick={() => {
            setTimeLeft(120);
          }}
        >
          resend
        </a>
      ) : (
        <>
          <AccessAlarm
            sx={{ color: "rgb(41,121,252)", marginRight: 0.5, marginTop: -0.5 }}
          />
          {formatTime(min)} : {formatTime(sec)}
        </>
      )}
    </div>
  );
};

export default CountdownTimer;
