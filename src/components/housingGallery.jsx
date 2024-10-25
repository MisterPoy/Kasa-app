import { Link } from "react-router-dom";
import "./hounsingGallery.scss";

export function HousingGallery() {
  return (
    <>
      <section className="housing-gallery_container">
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
        <figure>
          <img
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg"
            alt=""
          />
          <figcaption>
            <span>Magnifique appartement proche Canal Saint Martin</span>
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg"
            alt=""
          />
          <figcaption>Studio de charme - Buttes Chaumont</figcaption>
        </figure>
        <figure>
          <img
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
            alt=""
          />
          <figcaption>Appartement cosy</figcaption>
        </figure>
        <figure>
          <img
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg"
            alt=""
          />
          <figcaption>
            Magnifique appartement proche Canal Saint Martin
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg"
            alt=""
          />
          <figcaption>Studio de charme - Buttes Chaumont</figcaption>
        </figure>
        <figure>
          <img
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
            alt=""
          />
          <figcaption>Appartement cosy</figcaption>
        </figure>
        <figure>
          <img
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg"
            alt=""
          />
          <figcaption>
            Magnifique appartement proche Canal Saint Martin
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg"
            alt=""
          />
          <figcaption>Studio de charme - Buttes Chaumont</figcaption>
        </figure>
      </section>
    </>
  );
}
