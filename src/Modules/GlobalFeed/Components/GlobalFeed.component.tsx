import FeedComponent from "../../../Shared/Modules/Feed/Components/Feed/Feed.component";

const GlobalFeedComponent = () => {
  // Создать рендерящую функцию, которая возвращает разметку, а не указывать просто в JSX
  return (
    <>
      <div className="home-page"></div>
      BANNER
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            FEED TOGGLER
            <FeedComponent apiUrl={"/articles"} />
          </div>
          <div className="col-md-3">POPULAR TAGS</div>
        </div>
      </div>
    </>
  );
};
export default GlobalFeedComponent;
