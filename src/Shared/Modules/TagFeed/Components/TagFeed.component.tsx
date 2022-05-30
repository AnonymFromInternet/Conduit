import BannerComponent from "../../Banner/Components/Banner.component";
import FeedTogglerComponent from "../../FeedToggler/Components/FeedToggler.component";
import FeedComponent from "../../Feed/Components/Feed/Feed.component";
import PopularTagsComponent from "../../PopularTags/Component/PopularTags.component";
import { useLocation } from "react-router-dom";

const TagFeedComponent = () => {
  const url = useLocation();
  const arrayFromUrl = url.pathname.split("/");
  const tageName = arrayFromUrl[arrayFromUrl.length - 1];
  const apiUrl = `/articles?tag=${tageName}`;
  return (
    <>
      <div className="home-page"></div>
      <BannerComponent />
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <FeedTogglerComponent tagName={tageName} />
            <FeedComponent apiUrl={apiUrl} />
          </div>
          <div className="col-md-3">
            <PopularTagsComponent />
          </div>
        </div>
      </div>
    </>
  );
};
export default TagFeedComponent;
