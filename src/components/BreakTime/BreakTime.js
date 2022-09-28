import React from "react";

const BreakTime = ({ handleBreakTime }) => {
  return (
    <div className="mt-5">
      <h1 className="text-xl font-semibold">Add A Break</h1>
      <div className="mt-6 bg-slate-50 p-4 rounded-md flex justify-between">
        <button
          onClick={(e) => handleBreakTime(e)}
          className="btn btn-circle btn-outline bg-white"
          value="10"
        >
          10s
        </button>
        <button
          onClick={(e) => handleBreakTime(e)}
          className="btn btn-circle btn-outline bg-white"
          value="20"
        >
          20s
        </button>
        <button
          onClick={(e) => handleBreakTime(e)}
          className="btn btn-circle btn-outline bg-white"
          value="30"
        >
          30s
        </button>
        <button
          onClick={(e) => handleBreakTime(e)}
          className="btn btn-circle btn-outline bg-white"
          value="40"
        >
          40s
        </button>
        <button
          onClick={(e) => handleBreakTime(e)}
          className="btn btn-circle btn-outline bg-white"
          value="50"
        >
          50s
        </button>
      </div>
    </div>
  );
};

export default BreakTime;
