import FeedComponent from "../../../Shared/Modules/Feed/Components/Feed/Feed.component";
import BannerComponent from "../../../Shared/Modules/Banner/Components/Banner.component";
import PopularTagsComponent from "../../../Shared/Modules/PopularTags/Component/PopularTags.component";

const GlobalFeedComponent = () => {
  return (
    <>
      <div className="home-page"></div>
      <BannerComponent />
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            FEED TOGGLER
            <FeedComponent apiUrl={"/articles"} />
          </div>
          <div className="col-md-3">
            <PopularTagsComponent />
          </div>
        </div>
      </div>
    </>
  );
};
export default GlobalFeedComponent;
