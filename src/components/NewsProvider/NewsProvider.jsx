import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CategoryIdContext = createContext(null);
const NewsProvider = ({ children }) => {
  const [activatedCategory, setActivatedCategory] = useState("0");
  const [news, setNews] = useState([]);
  const [newsDetails, setNewsDetails] = useState({});

  const categoryInfo = {
    activatedCategory,
    setActivatedCategory,
    news,
    setNews,
    newsDetails,
    setNewsDetails,
  };

  return (
    <div>
      <CategoryIdContext.Provider value={categoryInfo}>
        {children}
      </CategoryIdContext.Provider>
    </div>
  );
};

export default NewsProvider;

NewsProvider.propTypes = {
  children: PropTypes.node,
};
