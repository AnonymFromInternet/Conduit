import { Route, Routes } from "react-router-dom";

import GlobalFeedComponent from "../Modules/GlobalFeed/Components/GlobalFeed.component";
import AuthenticationComponent from "../Modules/Authentication/Components/Authentication.component";
import ArticleComponent from "../Modules/Article/Components/Article.component";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<GlobalFeedComponent />} />
      <Route path="/login" element={<AuthenticationComponent />} />
      <Route path="/register" element={<AuthenticationComponent />} />
      <Route path={"/articles/:slug"} element={<ArticleComponent />} />
    </Routes>
  );
};
