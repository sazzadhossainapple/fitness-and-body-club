import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const UserDetails = () => {
  return (
    <div>
      <div className="flex gap-2">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" alt="" />
          </div>
        </label>
        <div>
          <h3 className="text-lg font-medium ">Sazzad Hossain</h3>
          <p className="text-base">Web Developer</p>
          <p className="text-gray-400 ">
            <small>
              <FontAwesomeIcon icon={faLocationDot} />
              <span> Mymenshing, Bangladesh</span>
            </small>
          </p>
        </div>
      </div>
      <div className="mt-6 bg-slate-50 p-4 rounded-md flex justify-between">
        <span>
          <h3>
            <span className="text-2xl font-medium">69</span>kg
          </h3>
          <p>Weight</p>
        </span>
        <span>
          <h3>
            <span className="text-2xl font-medium">5.8</span>
          </h3>
          <p>Height</p>
        </span>
        <span>
          <h3>
            <span className="text-2xl font-medium">25</span>yrs
          </h3>
          <p>Age</p>
        </span>
      </div>
    </div>
  );
};

export default UserDetails;
