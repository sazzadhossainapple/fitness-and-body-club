import React, { useEffect, useState } from "react";

const FitnessActivities = () => {
  const [fitnessActivities, setFitnessActivities] = useState([]);

  useEffect(() => {
    fetch("gymFitness.json")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>The Fitness & Body Club</h1>
      <div></div>
    </div>
  );
};

export default FitnessActivities;
