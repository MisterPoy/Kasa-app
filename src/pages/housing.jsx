import { HeaderNav } from "../components/headerNAv";
import { Footer } from "../components/footer";

export function Housing() {
  return (
    <>
      <HeaderNav />
      <img
        className="housingImg"
        src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg"
      ></img>
      <Footer />
    </>
  );
}
