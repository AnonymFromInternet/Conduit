import React, { useEffect } from "react";
import { getFeedAction } from "../../Store/Slices/Feed.slice";
import { useAppDispatch, useAppSelector } from "../../../../GlobalStore/Hooks";
import LoadingComponent from "../../../../Components/Loading/Loading.component";
import { Link } from "react-router-dom";

interface FeedComponentPropsInterface {
  apiUrl: string;
}

const FeedComponent: React.FC<FeedComponentPropsInterface> = ({ apiUrl }) => {
  // Store
  const isLoadingSelector$ = useAppSelector((state) => state.feed.isLoading);
  const dataSelector$ = useAppSelector((state) => state.feed.data);
  const errorSelector$ = useAppSelector((state) => state.feed.error);
  const dispatch = useAppDispatch();
  // Store

  useEffect(() => {
    dispatch(getFeedAction(apiUrl));
  }, []);

  const renderContent = () => {
    if (!dataSelector$) {
      return;
    }
    return (
      <div className="article-preview">
        {dataSelector$.articles.map((article) => {
          return (
            <div key={article.slug}>
              <div className="article-meta">
                <Link to={`/profiles/${article.author.username}`}>
                  <img src={article.author.image} alt="userImage" />
                </Link>
                <div className="info">
                  <Link to={`/profiles/${article.author.username}`}>
                    {article.author.username}
                  </Link>
                  <span className="date">{article.createdAt}</span>
                </div>
                <div className="pull-xs-right">ADD TO FAVORITES</div>
              </div>
              <Link className="preview-link" to={`/articles/${article.slug}`}>
                <h1>{article.title}</h1>
                <p>{article.description}</p>
              </Link>
              LIST OF TAGS
            </div>
          );
        })}
        PAGINATION
      </div>
    );
  };
  const content = renderContent();
  return (
    <>
      {isLoadingSelector$ && <LoadingComponent />}
      {errorSelector$ && <p>Error...</p>}
      {content}
    </>
  );
};

export default FeedComponent;
