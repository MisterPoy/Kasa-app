import { Banner1 } from "../components/banner/banner1.jsx";
import { HousingGallery } from "../components/housingGallery/housingGallery.jsx";

export function Home() {
  return (
    <>
      <Banner1 page="home" />
      <HousingGallery />
    </>
  );
}
