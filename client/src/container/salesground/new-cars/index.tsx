import React from "react";
import { useAppSelector } from "../../../store";

const NewCars = () => {
  const { loggedInUser } = useAppSelector((state) => state?.auth);

  console.log(loggedInUser, "logged");
  return <div>NewCars</div>;
};

export default NewCars;
