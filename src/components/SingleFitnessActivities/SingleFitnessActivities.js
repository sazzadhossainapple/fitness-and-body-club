import React from "react";

const SingleFitnessActivities = ({ fitness }) => {
  console.log(fitness);
  const { activitesName, age, description, img, timeRequired } = fitness;
  return (
    <div>
      <div className="card card-compact w-full h-full bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{activitesName}</h2>
          <p>If a dog chews shoes whose shoes does he in choose?</p>
          <h3 className="font-medium">For Age: {age}</h3>
          <h3 className="font-medium">Time required: {timeRequired}</h3>
          <div className="card-actions">
            <button className="btn btn-primary w-full">Add to list</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFitnessActivities;
