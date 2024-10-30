import { HeaderNav } from "../components/headerNAv/headerNAv";
import { Footer } from "../components/footer/footer";
import { Banner1 } from "../components/banner/banner1";
import "./about.scss";
import { Collapse } from "../components/collapse/collapse";
import aboutList from "../data/aboutList.json";

export function About() {
  console.log(aboutList);
  return (
    <>
      <HeaderNav />
      <Banner1 page="about"/>
      <div className="collapse-container">
        {aboutList.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />
        ))}
      </div>
      <Footer />
    </>      
  );
}
