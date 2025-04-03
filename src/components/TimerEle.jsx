import { useEffect, useState } from "react";

import styled from "styled-components";

const Div = styled.div`
  padding-bottom: 1rem;
  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 748px) {
  }
`;
const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  background: #060a90;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5rem;
  border-top-right-radius: 0;
  border-top-left-radius: 0;

  padding: 3rem 0;

  @media screen and (max-width: 1280px) {
    padding: 2.7rem 0;
  }
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 748px) {
    padding: 2.5rem 0;
    border-radius: 2rem;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
`;

const Timer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  @media screen and (max-width: 1280px) {
    gap: 3.4rem;
  }

  @media screen and (max-width: 748px) {
    gap: 0.7rem;
  }
`;
const TimeDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 500;
  @media screen and (max-width: 748px) {
    gap: 0.2rem;
  }
`;
const PTimer = styled.p`
  font-size: 4rem;
  @media screen and (max-width: 1280px) {
    font-size: 2.8rem;
  }
  @media screen and (max-width: 748px) {
    font-size: 1.5rem;
  }
`;
const Pdays = styled.p``;

const TimerEle = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const calculateTimeLeft = () => {
      const targetDate = new Date("June 20, 2025 00:00:00").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
      } else {
        timeLeft = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isClient) {
    // Avoid rendering on the server side
    return null;
  }
  return (
    <Div id="big-day">
      <Wrapper>
        <Timer>
          <TimeDiv>
            <PTimer>
              {timeLeft.days < 10 ? "0" + timeLeft.days : timeLeft.days}
            </PTimer>
            <Pdays>Days</Pdays>
          </TimeDiv>
          <TimeDiv>
            <PTimer>
              {timeLeft.hours < 10 ? "0" + timeLeft.hours : timeLeft.hours}
            </PTimer>
            <Pdays>Hours</Pdays>
          </TimeDiv>
          <TimeDiv>
            <PTimer>
              {timeLeft.minutes < 10
                ? "0" + timeLeft.minutes
                : timeLeft.minutes}
            </PTimer>{" "}
            <Pdays>Minutes</Pdays>
          </TimeDiv>
          <TimeDiv>
            <PTimer>
              {timeLeft.seconds < 10
                ? "0" + timeLeft.seconds
                : timeLeft.seconds}
            </PTimer>{" "}
            <Pdays>Seconds</Pdays>
          </TimeDiv>
        </Timer>
      </Wrapper>
    </Div>
  );
};

export default TimerEle;
