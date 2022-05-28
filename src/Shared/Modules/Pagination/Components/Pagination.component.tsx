import { FC } from "react";
import { NavLink } from "react-router-dom";

import { limit } from "../../../Types/Constants";

interface PaginationComponentProps {
  total: number;
  baseUrl: string;
  getPage: (page: number) => void;
  currentPage: number;
}

const PaginationComponent: FC<PaginationComponentProps> = ({
  currentPage,
  total,
  baseUrl,
  getPage,
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
          return (
            <li
              className={`page-item ${currentPage === element ? "active" : ""}`}
              key={element}
              onClick={() => getPage(element)}
            >
              <NavLink className="page-link" to={baseUrl + `/page=${element}`}>
                {element}
              </NavLink>
            </li>
          );
        })}
      </>
    );
  };

  return <ul className="pagination">{content()}</ul>;
};
export default PaginationComponent;

// Добавлять данные в запрос на бэкенд в диспатч при переключении страницы для того, чтобы на бэкенд отправлялся
// правильный оффсет
