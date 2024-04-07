import { useContext, useEffect } from "react";
import NewsCard from "../NewsCard/NewsCard";
import { CategoryIdContext } from "../NewsProvider/NewsProvider";

const DragonNewsHome = () => {
  const { activatedCategory, news, setNews } = useContext(CategoryIdContext);

  useEffect(() => {
    fetch("./news.json")
      .then((res) => res.json())
      .then((data) => {
        if (activatedCategory === "0") {
          setNews(data);
          return;
        }
        const categoryNews = data.filter(
          (categoryNews) => categoryNews.category_id === activatedCategory
        );
        setNews(categoryNews);
      });
  }, [activatedCategory]);

  return (
    <div className="lg:col-span-2">
      <h3 className="text-dark text-xl font-semibold lead">All Categories</h3>
      <div>
        {news.map((displayNews) => (
          <NewsCard key={displayNews._id} displayNews={displayNews} />
        ))}
      </div>
    </div>
  );
};

export default DragonNewsHome;
