import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import BreakTime from "../BreakTime/BreakTime";
import UserDetails from "../UserDetails/UserDetails";

const ExerciseDetails = ({ exerciseTime }) => {
  const [breakTime, setBreakTime] = useState(0);
  const [getStoreData, setGetStoreData] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("break-time"));
    if (data) {
      setGetStoreData(data);
    }
  }, [breakTime]);

  // total time calculate
  const totalTimeRequired = exerciseTime.reduce(
    (previous, current) => previous + current.timeRequired,
    0
  );

  const handleBreakTime = (event) => {
    setBreakTime(event.target.value);
    localStorage.setItem("break-time", JSON.stringify(event.target.value));
  };

  // toast message
  const showToastMessage = () => {
    toast.success("Congratulations, your activity is completed!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div className="lg:mt-5 sticky top-0 p-5">
      <UserDetails></UserDetails>
      <BreakTime handleBreakTime={handleBreakTime}></BreakTime>
      <div className="mt-5">
        <h1 className="text-xl font-semibold">Exercise Details</h1>
        <div className="mt-6 bg-slate-50 p-4 rounded-md flex justify-between">
          <h2 className="text-base font-medium">Exercise time</h2>
          <p>{totalTimeRequired} seconds</p>
        </div>
        <div className="mt-6 mb-10 bg-slate-50 p-4 rounded-md flex justify-between">
          <h2 className="text-base font-medium">Break time</h2>
          <p>{getStoreData} seconds</p>
        </div>
      </div>
      <div className="my-4">
        <button onClick={showToastMessage} className="btn btn-info w-full ">
          Activity Completed
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ExerciseDetails;
