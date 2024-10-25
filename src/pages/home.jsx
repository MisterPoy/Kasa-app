import { Banner1 } from "../components/banner1";
import "./home.css";
import { HousingGallery } from "../components/housingGallery";

export function Home() {
  return (
    <>
      <div className="home_container">
        <Banner1 />
        <HousingGallery />
      </div>
    </>
  );
}
