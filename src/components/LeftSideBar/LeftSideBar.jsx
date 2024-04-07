import { useContext, useEffect, useState } from "react";
import { CategoryIdContext } from "../NewsProvider/NewsProvider";

const LeftSideBar = () => {
  const [categories, setCategories] = useState([]);
  const { activatedCategory, setActivatedCategory } =
    useContext(CategoryIdContext);

  useEffect(() => {
    fetch("./categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h3 className="text-dark text-xl font-semibold lead mb-5">
        All Categories
      </h3>
      <div className="flex flex-col items-start  gap-1">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActivatedCategory(category.id)}
            className={`${
              activatedCategory === category.id && "bg-dark06"
            } px-12 py-4 text-dark lg:text-start font-semibold w-full rounded-md`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
