import { useEffect } from "react";
import { v4 as uuid } from "uuid";

import { useAppDispatch, useAppSelector } from "../../../GlobalStore/Hooks";
import {
  errorsSelector,
  getPopularTagsAction,
  isLoadingSelector,
  popularTagsSelector,
} from "../Store/Slices/PopularTags.slice";
import LoadingComponent from "../../../Components/Loading/Loading.component";
import ErrorMessageComponent from "../../../Components/ErrorMessage/ErrorMessage.component";
import { Link } from "react-router-dom";

const PopularTagsComponent = () => {
  const dispatch = useAppDispatch();
  const isLoading$ = useAppSelector(isLoadingSelector);
  const popularTags$ = useAppSelector(popularTagsSelector);
  const errors$ = useAppSelector(errorsSelector);
  // Store
  useEffect(() => {
    dispatch(getPopularTagsAction());
  }, []);

  const content = () => {
    return popularTags$?.map((tag) => {
      return (
        <Link
          style={{ textDecoration: "none" }}
          className="tag-default tag-pill"
          to={`/tags/` + tag}
          key={uuid()}
        >
          {tag}
        </Link>
      );
    });
  };
  return (
    <>
      {errors$ && <ErrorMessageComponent error={errors$} />}
      {isLoading$ && <LoadingComponent />}

      <div className="sidebar">
        <h4 className="text-primary">Popular Tags</h4>
        <div className="tag-list"></div>
      </div>
      {content()}
    </>
  );
};
export default PopularTagsComponent;
