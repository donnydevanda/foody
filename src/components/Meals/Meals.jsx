import { Fragment } from "react";

import MealSummary from "./MealSummary";
import AvailableMeal from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealSummary />
      <AvailableMeal />
    </Fragment>
  );
};

export default Meals;
