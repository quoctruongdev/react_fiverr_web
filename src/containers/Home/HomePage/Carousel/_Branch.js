import React from "react";
import "./style.css";
export default function BranchCarousel() {
  return (
    <>
      <div className="container-fluid trusted-by-wrapper  d-flex justify-content-center mx-auto ">
        <div className="row">
          <div className="col-md-12  ">
            <ul className="branch__list ">
              <li>
                <p className="trusted-by-text  ">Trusted by:</p>
              </li>
              <li>
                <picture>
                  <source
                    media="(max-width: 899px)"
                    srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.543cf10.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.2eb3efa.png 2x"
                  />
                  <source
                    media="(min-width: 900px)"
                    srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png 2x"
                  />
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png"
                    alt="facebook"
                  />
                </picture>
              </li>
              <li>
                <picture>
                  <source
                    media="(max-width: 899px)"
                    srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.aaaa0ad.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.b5c24c4.png 2x"
                  />
                  <source
                    media="(min-width: 900px)"
                    srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png 2x"
                  />
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png"
                    alt="Google"
                  />
                </picture>
              </li>
              <li>
                <picture>
                  <source
                    media="(max-width: 899px)"
                    srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.3cb353a.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.02746a2.png 2x"
                  />
                  <source
                    media="(min-width: 900px)"
                    srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png 2x"
                  />
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png"
                    alt="NETFLIX"
                  />
                </picture>
              </li>
              <li>
                <picture>
                  <source
                    media="(max-width: 899px)"
                    srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.128c0d9.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.259884d.png 2x"
                  />
                  <source
                    media="(min-width: 900px)"
                    srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png 2x"
                  />
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png"
                    alt="P&G"
                  />
                </picture>
              </li>
              <li className="display-from-sm">
                <picture>
                  <source
                    media="(max-width: 899px)"
                    srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.9e4defc.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.e48e2b0.png 2x"
                  />
                  <source
                    media="(min-width: 900px)"
                    srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png 2x"
                  />
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png"
                    alt="PayPal"
                  />
                </picture>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
