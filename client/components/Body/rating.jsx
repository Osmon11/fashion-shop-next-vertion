import { Rating } from "@material-ui/lab";
import React from "react";

export default function CustomRating() {
  return (
    <Rating placeholder='Моя оценка' name='half-rating' defaultValue={2.5} />
  );
}
