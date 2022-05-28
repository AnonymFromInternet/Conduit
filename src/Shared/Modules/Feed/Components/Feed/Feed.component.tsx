import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../GlobalStore/Hooks";

import { getFeedAction } from "../../Store/Slices/Feed.slice";
import LoadingComponent from "../../../../Components/Loading/Loading.component";
import ErrorMessageComponent from "../../../../Components/ErrorMessage/ErrorMessage.component";
import PaginationComponent from "../../../Pagination/Components/Pagination.component";

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

  // Pagination
  // limit
  // get actual page url
  const actualUrl = useLocation();
  const baseUrl = actualUrl.pathname.split("?")[0];
  console.log("base url is: ", baseUrl);
  // Pagination

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
            <div key={article.slug} style={{ marginBottom: "33px" }}>
              <div className="article-meta">
                <Link to={`/profiles/${article.author.username}`}>
                  <img src={article.author.image} alt="userImage" />
                </Link>
                <div className="info">
                  <Link
                    to={`/profiles/${article.author.username}`}
                    style={{ textDecoration: "none" }}
                  >
                    {article.author.username}
                  </Link>
                  <span className="date">{article.createdAt}</span>
                </div>
                <div className="pull-xs-right">ADD TO FAVORITES</div>
              </div>
              <Link
                className="preview-link"
                to={`/articles/${article.slug}`}
                style={{ textDecoration: "none" }}
              >
                <h1>{article.title}</h1>
                <p>{article.description}</p>
              </Link>
              LIST OF TAGS
            </div>
          );
        })}
        <PaginationComponent total={3} limit={1} currentPage={3} baseUrl={""} />
      </div>
    );
  };
  const content = renderContent();
  return (
    <>
      {isLoadingSelector$ && <LoadingComponent />}
      {errorSelector$ && <ErrorMessageComponent error={errorSelector$} />}
      {content}
    </>
  );
};

export default FeedComponent;
