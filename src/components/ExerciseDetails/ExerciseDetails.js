import React, { useState } from "react";
import UserDetails from "../UserDetails/UserDetails";

const ExerciseDetails = ({ exerciseTime }) => {
  const [breakTime, setBreakTime] = useState(0);

  // total time calculate
  const totalTimeRequired = exerciseTime.reduce(
    (previous, current) => previous + current.timeRequired,
    0
  );

  const handleBreakTime = () => {
    console.log("ckiv");
  };

  return (
    <div className="mt-7 sticky top-0 p-5">
      <UserDetails></UserDetails>
      <div className="mt-5">
        <h1 className="text-xl font-semibold">Add A Break</h1>
        <div className="mt-6 bg-slate-50 p-4 rounded-md flex justify-between">
          <button
            onClick={() => handleBreakTime()}
            className="btn btn-circle btn-outline bg-white"
          >
            10s
          </button>
          <button className="btn btn-circle btn-outline bg-white">20s</button>
          <button className="btn btn-circle btn-outline bg-white">30s</button>
          <button className="btn btn-circle btn-outline bg-white">40s</button>
          <button className="btn btn-circle btn-outline bg-white">50s</button>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-xl font-semibold">Exercise Details</h1>
        <div className="mt-6 bg-slate-50 p-4 rounded-md flex justify-between">
          <h2 className="text-base font-medium">Exercise time</h2>
          <p>{totalTimeRequired} seconds</p>
        </div>
        <div className="mt-6 bg-slate-50 p-4 rounded-md flex justify-between">
          <h2 className="text-base font-medium">Break time</h2>
          <p>{breakTime} seconds</p>
        </div>
      </div>
      <div className="my-4">
        <button className="btn btn-primary w-full ">Activity Completed</button>
      </div>
    </div>
  );
};

export default ExerciseDetails;
