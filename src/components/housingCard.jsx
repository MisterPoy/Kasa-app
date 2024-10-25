import "./housingCard.scss";
import { Link } from "react-router-dom";

export function HousingCard() {
  return (
    <>
      <Link to="housing">
        <figure>
          <img
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
            alt=""
          />
          <figcaption>
            <span className="housingCardTitle">Appartement cosy</span>
          </figcaption>
        </figure>
      </Link>
    </>
  );
}
