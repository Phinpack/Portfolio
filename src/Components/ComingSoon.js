import React, { useState, useEffect } from "react";
import "../CSS/ComingSoon.css";

const ComingSoon = () => {
   const targetDate = new Date("2024-12-31T23:59:59");

   const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

   function calculateTimeRemaining() {
      const now = new Date();
      const difference = targetDate - now;

      if (difference < 0) {
         // The target date has passed
         return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
         (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
   }

   useEffect(() => {
      const interval = setInterval(() => {
         setTimeRemaining(calculateTimeRemaining());
      }, 1000);

      return () => clearInterval(interval);
   }, []);

   return (
      <div className="coming-soon-container">
         <h1
            style={{
               fontSize: "60px",
               marginTop: "70px",
               marginBottom: "100px",
               fontWeight: "700",
            }}
         >
            Coming Soon
         </h1>
         <div className="time-row">
            <div className="time-column">
               <h1>{timeRemaining.days}</h1>
               <h2>Days</h2>
            </div>
            <div className="time-column">
               <h1>{timeRemaining.hours}</h1>
               <h2>Hours</h2>
            </div>
            <div className="time-column">
               <h1>{timeRemaining.minutes}</h1>
               <h2>Minutes</h2>
            </div>
            <div className="time-column">
               <h1>{timeRemaining.seconds}</h1>
               <h2>Seconds</h2>
            </div>
         </div>
      </div>
   );
};

export default ComingSoon;
