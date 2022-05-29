import { FC } from "react";
import { v4 as uuid } from "uuid";

import { PopularTagType } from "../../../Types/PopularTag.type";
import { Link } from "react-router-dom";

interface TagListComponentProps {
  tags: PopularTagType[];
}

const TagListComponent: FC<TagListComponentProps> = ({ tags }) => {
  const content = () => {
    return tags.map((tag) => {
      return (
        <li
          key={uuid()}
          className="tag-default tag-pill tag-outline pull-xs-right"
        >
          <Link style={{ textDecoration: "none" }} to={"/"}>
            {tag}
          </Link>
        </li>
      );
    });
  };
  return <ul className="tag-list">{content()}</ul>;
};
export default TagListComponent;
