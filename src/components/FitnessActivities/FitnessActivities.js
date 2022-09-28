import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import SingleFitnessActivities from "../SingleFitnessActivities/SingleFitnessActivities";

const FitnessActivities = () => {
  const [fitnessActivities, setFitnessActivities] = useState([]);

  useEffect(() => {
    fetch("gymFitness.json")
      .then((res) => res.json())
      .then((data) => setFitnessActivities(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-1">
      <div className="lg:col-span-3 sm:col-span-1 w-[85%] mx-auto ">
        <div className="mt-28">
          <h1 className="text-3xl font-bold mb-6">
            <FontAwesomeIcon icon={faDumbbell} /> The Fitness & Body Club
          </h1>
          <h3 className="text-2xl font-semibold mb-6">
            Age Select today’s exercise
          </h3>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 ">
          {fitnessActivities.map((fitness) => (
            <SingleFitnessActivities
              key={fitness.id}
              fitness={fitness}
            ></SingleFitnessActivities>
          ))}
        </div>
      </div>
      <div className="col-span-1">
        <h1>side</h1>
      </div>
    </div>
  );
};

export default FitnessActivities;
