import { HeaderNav } from "../components/headerNAv/headerNAv";
import { Footer } from "../components/footer/footer";
import "./housing.scss";

export function Housing() {
  return (
    <>
      <div className="housing-sheet">
        <img
          className="housingImg"
          src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg"
        ></img>
      </div>
    </>
  );
}
