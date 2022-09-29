import React from "react";

const SingleFitnessActivities = (props) => {
  const { fitness, handleAddToList } = props;
  const { activitesName, age, description, img, timeRequired } = fitness;
  return (
    <div>
      <div className="card card-compact w-full h-full bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{activitesName}</h2>
          <p>
            {description.length >= 80
              ? `${description.slice(0, 80)} ...More`
              : "no data found"}
          </p>
          <h3 className="font-medium">For Age: {age}</h3>
          <h3 className="font-medium">Time required: {timeRequired}s</h3>
          <div className="card-actions mt-4">
            <button
              onClick={() => handleAddToList(fitness)}
              className="btn btn-info  w-full"
            >
              Add to list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFitnessActivities;
