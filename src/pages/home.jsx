import { Banner1 } from "../components/banner/banner1.jsx";
import "./home.css";
import { HousingGallery } from "../components/housingGallery/housingGallery.jsx";

export function Home() {
  return (
    <>
      <div className="home_container">
        <Banner1 page="home"/>
        <HousingGallery />
      </div>
    </>
  );
}
