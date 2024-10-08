import Button from "components/button";
import BannerStyleWrapper from "./Banner.style";

import bannerIcon from "assets/images/icons/icon1.png";

const Banner = () => {
  return (
    <>
      <BannerStyleWrapper>
        <div className="container">
          <div className="banner-content text-center">
            <img
              src={bannerIcon}
              className="banner-icon"
              alt="banner icon"
            />
            <h1 className="banner-title">
              Hyper Liquid Staking For Shibs
            </h1>
            <div className="description">
            Arguably the most entertaining outcome, the most ironic outcome, would be that Dogecoin becomes the currency of Earth of the future
            </div>

            <Button href="/projects-grid" variant="mint" md isCenter className="banner-btn">
              Get Early Access
            </Button>
          </div>
        </div>
      </BannerStyleWrapper>
    </>
  );
};

export default Banner;
