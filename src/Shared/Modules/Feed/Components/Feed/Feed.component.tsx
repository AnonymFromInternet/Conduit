import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../GlobalStore/Hooks";
import { parseUrl, stringify } from "query-string";

import { getFeedAction } from "../../Store/Slices/Feed.slice";
import LoadingComponent from "../../../../Components/Loading/Loading.component";
import ErrorMessageComponent from "../../../../Components/ErrorMessage/ErrorMessage.component";
import PaginationComponent from "../../../Pagination/Components/Pagination.component";
import { limit } from "../../../../Types/Constants";

interface FeedComponentPropsInterface {
  apiUrl: string;
}

const FeedComponent: FC<FeedComponentPropsInterface> = ({ apiUrl }) => {
  // Store
  const isLoadingSelector$ = useAppSelector((state) => state.feed.isLoading);
  const dataSelector$ = useAppSelector((state) => state.feed.data);
  const errorSelector$ = useAppSelector((state) => state.feed.error);
  const dispatch = useAppDispatch();
  // Store

  const [page, setPage] = useState(1);

  useEffect(() => {
    // В этом адресе требуется поменять адрес с доп данными для оффсета
    const offset = page * limit - limit;
    const parsedUrl = parseUrl(apiUrl);
    const stringifiedParams = stringify({ limit, offset, ...parsedUrl.query });
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;

    dispatch(getFeedAction(apiUrlWithParams));
  }, [page]);

  const changePage = (page: number) => {
    setPage(page);
  };

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
        <PaginationComponent
          currentPage={page}
          total={dataSelector$.articlesCount}
          baseUrl={apiUrl}
          getPage={changePage}
        />
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

// При помощи библиотеки query-string требуется получать базовый адрес
