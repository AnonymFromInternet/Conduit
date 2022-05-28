import { FC, useEffect } from "react";
import { NavLink } from "react-router-dom";

interface PaginationComponentProps {
  total: number;
  limit: number;
  currentPage: number;
  baseUrl: string;
}

const PaginationComponent: FC<PaginationComponentProps> = ({
  total,
  limit,
  baseUrl,
  currentPage,
}) => {
  const pagesCount = Math.ceil(total / limit);

  const content = () => {
    const array: number[] = [];
    for (let i = 0; i < pagesCount; i++) {
      array.push(i + 1);
    }

    return (
      <>
        {array.map((element) => {
          // should return NavLink
          return (
            <li
              style={{
                border: "1px solid black",
                margin: "6px",
                width: "33px",
                height: "33px",
                textAlign: "center",
                alignItems: "center",
              }}
              className="page-item"
              key={element}
            >
              <NavLink
                style={{ color: "black", textDecoration: "none" }}
                to={baseUrl}
              >
                {element}
              </NavLink>
            </li>
          );
        })}
      </>
    );
  };

  //useEffect(() => {}, []);

  return <ul className="pagination">{content()}</ul>;
};
export default PaginationComponent;
